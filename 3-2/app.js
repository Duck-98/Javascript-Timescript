const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // 서버 데이터를 가져오는 코드
const content = document.createElement('div');
const NEWS_URL ='https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL='https://api.hnpwa.com/v0/item/@id.json';
const store={
  currentPage : 1,
};

function getData(url){
  ajax.open('GET',url,false); // false -> 동기적으로 처리해서 받아오겠다.
  ajax.send(); //데이터 가져옴

  return JSON.parse(ajax.response);
}

function newsFeed(){
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  let template = `
    <div>
    <h1>Hacker News</h1>
      <ul>
        {{__news_feed__}}
      </ul>
      <div>
        <a href="#">이전 페이지</a>
        <a href="#">다음 페이지</a>
      </div>    
    </div>
  `;

  newsList.push('<ul>');

  for(let i  = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++){ //for문을 이용하여 10번을 반복함
   newsList.push(`
   <li>
    <a href="#/show/${newsFeed[i].id}">
      ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>
    `); 
  }
  newsList.push('</ul>');
  newsList.push(`
  <div>
    <a href ="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a> 
    <a href ="#/page/${store.currentPage + 1}">다음 페이지</a>
  </div>
  `);
  container.innerHTML = newsList.join(``);
}

const ul = document.createElement('ul'); //ul 태그를 사용하기 위해 ul 상수 선언.

function newsDetail(){
  const id = location.hash.substr(7);
  const newsContent = getData(CONTENT_URL.replace('@id',id));
  
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href = "#/page/${store.currentPage}">목록으로</a>
    </div>
  `;
}
function router(){
 const routePath = location.hash;

 if(routePath === ''){
   newsFeed();
 }else if(routePath.indexOf('#/page/') >= 0){
  store.currentPage = Number(routePath.substr(7)); 
  newsFeed();
 }else{
   newsDetail();
 }
}// router을 이용하여 화면전환을 시켜줌.

window.addEventListener('hashchange',router);// hashchange => 화면 전환을 위한 트리거.

router(); 
