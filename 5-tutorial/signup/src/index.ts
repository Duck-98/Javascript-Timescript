import { AnyObject } from './types';
import App from './app';

declare global { //글로벌 영역 
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string;
    },
    daum: any,
  }
}

const app = new App('#root', { // app -> class
  title: 'Javascript & TypeScript Essential Chapter 5 - Sign up'
});

app.render();
