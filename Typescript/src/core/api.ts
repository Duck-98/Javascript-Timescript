import { NEWS_URL, CONTENT_URL } from '../config';
import { NewsFeed, NewsDetail } from '../types';

export default class Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }


async request<AjaxResponse>(): Promise<AjaxResponse>{
  const response = await fetch(this.url); //fetch api를 리턴하는 것처럼 보여주게 함.
  return await response.json() as AjaxResponse; //response를 받은 json를 호출
  //fetch api를 간단하게 바꿈
  }//비동기 함수로 변환하기위해 async사용
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace('@id', id));
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
  }
}
