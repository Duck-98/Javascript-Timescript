import { NewsFeed,NewsStore } from './types';

export  class Store implements NewsStore{
    private feeds : NewsFeed[];
    private _currentPage : number;
    
    constructor(){
        this.feeds = [];
        this._currentPage = 1;
    }

    get currentPage(){
        return this._currentPage;
    }

    set currentPage(page : number){
        this._currentPage = page;
    }
    // getter와 setter를 이용하면 외부에서 봤을 때 함수가 아닌 속성으로 볼 수 있다.
    get nextPage(): number {
        return this._currentPage + 1; // 다음 페이지로 가야하는 경우 페이지 + 1
    }
    get prevPage(): number {
        return this._currentPage > 1 ? this._currentPage - 1 : 1; // 이전 페이지로 가야하는 경우 페이지 - 1
    }

    get numberOfFeed() : number {
        return this.feeds.length;
    }

    get hasFeeds() : boolean {
        return this.feeds.length > 0;
    }
    getAllFeeds(): NewsFeed[]{
        return this.feeds;
    }
    getFeed(position : number) : NewsFeed{
        return this.feeds[position];
    }

    setFeeds(feeds : NewsFeed[]) : void{
        this.feeds = feeds.map(feed => ({
            ...feed,
            read : false
        }))
    } // 스프레드 오퍼레이터 , map 함수
    makeRead(id: number): void {
    const feed = this.feeds.find((feed: NewsFeed) => feed.id === id);

    if (feed) {
      feed.read = true;
    }
  }
} //find 함수

