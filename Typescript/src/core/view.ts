export default abstract class View {
    private template: string;
    private renderTemplate: string;
    private container: HTMLElement;
    private htmlList: string[];
  
    constructor(containerId: string, template: string) {
      const containerElement: HTMLElement | null = document.getElementById(containerId);
  
      if (!containerElement) {
        throw '최상위 컨테이너가 없어 UI를 진행하지 못합니다.';
      }
  
      this.container = containerElement;
      this.template = template;
      this.renderTemplate = template;
      this.htmlList = [];
    }
  
    protected updateView(): void {
      this.container.innerHTML = this.renderTemplate;
      this.renderTemplate = this.template; // 초기 값으로 변환
    }
    
    protected addHtml(htmlString: string): void {
      this.htmlList.push(htmlString);
    }
  
    protected getHtml(): string {
      const snapshot = this.htmlList.join('');
      this.clearHtmlList();// 초기화
      return snapshot;
    }
  
    protected setTemplateData(key: string, value: string): void {
      this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
    }
  
    private clearHtmlList(): void {
      this.htmlList = [];
    }
  
    abstract render(...params:string[]): void; // 추상메소드 , 자식 메소드에게 render()을 구현하게 하기 위해 사용
  }
  