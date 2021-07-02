interface Store  {
  currentPage : number;
  feeds : NewsFeed[];
} // Store의 타입 설정

interface News  {
  readonly id : number;
  readonly title: string;
  readonly time_ago : string;
  readonly url : string;
  readonly user : string;
  readonly content : string;
}

interface NewsFeed  extends News {
  readonly comments_count : number;
  readonly points : string;
  read?: boolean; //선택속성(있을 때도 있고 없을 때도 있음)
} // NewsFeed 타입 설정.

interface NewsDetail  extends News  {
  readonly comments : NewsComment[];
}

interface NewsComment extends News  {
  readonly comments : NewsComment[];
  readonly level : number;
}

const container: HTMLElement | null = document.getElementById('root'); //dom element를 받아옴
const ajax: XMLHttpRequest = new XMLHttpRequest(); //객체 타이핑
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store : Store = {
  currentPage: 1,
  feeds: [],
};



function applyApiMixins(targetClass: any, baseClasses: any[]): void { //믹스인 함수
  baseClasses.forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);
      
      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }            
    });
  });
}

class Api{
    getRequest <AjaxResponse >(url : string) : AjaxResponse {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, false); 
    ajax.send();                  
  
    return JSON.parse(ajax.response);
    }
  }

class NewsFeedApi {
  getData() : NewsFeed[] {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}


class NewsDetailApi {
  getData(id :string) : NewsDetail {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
  }
}
// getData를 클래스로 상속하게 해줌. * 중복을 없애기 위한 작업. 
/* <-- class를 사용하지 않고 제네릭을 사용한 경우 -->
function getData<AjaxResponse>(url : string) : AjaxResponse { //getData -> NewsFeed와 NewsDetail 둘 다 리턴을 해줌. NewsFeed[] | NewsDetail 
  ajax.open('GET', url, false); // <이름> -> 제네릭을 이용하여 호출하는 쪽에서 유형만 명시하면 리턴값(결과값)도 동일하게 나오게 설정을 해줌.
  ajax.send();                  // 이로 인해 타입가드를 사용할 필요가 없어짐. 만약 api의 개수가 적으면 타입가드를 하는게 편할 수 있겠지만 api의 개수가 늘어나면 제네릭을 이용하는 것이 효율적임
  
  return JSON.parse(ajax.response);
}*/
interface NewsFeedApi extends Api {};
interface NewsDetailApi extends Api {};
applyApiMixins(NewsFeedApi, [Api]); //Api를 NewsFeedApi에 내용을 넘겨주는 함수 (상속의 기능)
applyApiMixins(NewsDetailApi, [Api]);

function makeFeeds(feeds : NewsFeed[]) : NewsFeed[]{
  for (let i = 0; i < feeds.length; i++) {
    feeds[i].read = false;  
  }

  return feeds;
}
function updateView(html:string) : void{ //리턴 값이 없을 때는 void로 정의해줌
  if (container != null){
    container.innerHTML = html;
    }else{
      console.error('최상위 컨테이너가 없어 ui가 오류가 발생합니다.')
    }
}// 에러를 알려주는 함수(타입카드 코드)
function newsFeed() : void{
  const api = new NewsFeedApi();
  let newsFeed : NewsFeed[] = store.feeds;
  const newsList = []; 
  let template = `
    <div class="bg-gray-600 min-h-screen">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                Previous
              </a>
              <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                Next
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div class="p-4 text-2xl text-gray-700">
        {{__news_feed__}}        
      </div>
    </div>
  `;

  if (newsFeed.length === 0) {
    newsFeed = store.feeds = makeFeeds(api.getData());
  }

  for(let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsList.push(`
      <div class="p-6 ${newsFeed[i].read ? 'bg-red-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
        <div class="flex">
          <div class="flex-auto">
            <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>  
          </div>
          <div class="text-center text-sm">
            <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
          </div>
        </div>
        <div class="flex mt-3">
          <div class="grid grid-cols-3 text-sm text-gray-500">
            <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
            <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
            <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
          </div>  
        </div>
      </div>    
    `);
  }

  template = template.replace('{{__news_feed__}}', newsList.join(''));
  template = template.replace('{{__prev_page__}}', String(store.currentPage > 1 ? store.currentPage - 1 : 1));
  template = template.replace('{{__next_page__}}', String(store.currentPage + 1));

  updateView(template);
}

function newsDetail(): void {
  const id = location.hash.substr(7);
  const api = new NewsDetailApi();
  const newsContent = api.getData(id);
  let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/${store.currentPage}" class="text-gray-500">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full border rounded-xl bg-white m-6 p-4 ">
        <h2>${newsContent.title}</h2>
        <div class="text-gray-400 h-20">
          ${newsContent.content}
        </div>

        {{__comments__}}

      </div>
    </div>
  `;

  for(let i=0; i < store.feeds.length; i++) {
    if (store.feeds[i].id === Number(id)) {
      store.feeds[i].read = true;
      break;
    }
  }

  updateView(template.replace('{{__comments__}}', makeComment(newsContent.comments)));
}

function makeComment(comments : NewsComment[]): string {
  const commentString = [];

  for(let i = 0; i < comments.length; i++) {
    const comment : NewsComment = comments[i]; 
    commentString.push(`
      <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
        <div class="text-gray-400">
          <i class="fa fa-sort-up mr-2"></i>
          <strong>${comment.user}</strong> ${comment.time_ago}
        </div>
        <p class="text-gray-700">${comment.content}</p>
      </div>      
    `);

    if (comment.comments.length > 0) {
      commentString.push(makeComment(comment.comments));
    }
  }

  return commentString.join('');
}

function router() : void{
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routePath.substr(7));
    newsFeed();
  } else {
    newsDetail()
  }
}

window.addEventListener('hashchange', router);

router();
