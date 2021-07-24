 //함수를 이용해서 인스턴스 객체를 만드는 방법
 
 function CartV1(){ //C를 대문자로 쓴 이유 new 연산자를 써야하는 함수이기 때문에.(암묵적 룰)
     this.cart = [];
     this.currentId = 0;
 }

 CartV1.prototype.getNewId = function (){
     this.currentId++;
     return this.currentId;
 };

 CartV1.createItem = function(name,price){
     return {
         name, price
     };
 };

 CartV1.prototype.addItem = function(item){
     this.cart.push({
         ...item,
         id : this.getNewId(),
     });
 };

 CartV1.prototype.clearCart = function(item){
     this.cart =[];
     this.currentId = 0;
 };

 const shoppingCartV1 = new CartV1();

 shoppingCartV1.addItem(CartV1.createItem('수박', 8000));
 shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
 shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

 console.log(shoppingCartV1.cart);
// 클래스를 이용해서 인스턴스 객체를 만드는 방법.
 class CartV2 {
     static createItem = (name, price) => ({
         name, price //정적 메소드(static) -> 인스턴스 객체에는 들어나지 않고 클래스 자체에 위치
     });
     
     cart;
     currentId;

     constructor(){
         this.currentId = 0;
         this.cart = [];
     }

     getNewId = ()=> {
         this.currentId++;
         return this.currentId;
     }

     addItem = item => {
          this.cart.push({
              ...item,
              id: this.getNewId(),
          });
     }
 
    clearCart = () =>{
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

 shoppingCartV1.addItem(CartV2.createItem('수박', 8000));
 shoppingCartV1.addItem(CartV2.createItem('사과', 12000));
 shoppingCartV1.addItem(CartV2.createItem('두부', 2000));

console.log(shoppingCartV2.cart);

//결론 함수를 이용하여 인스턴스 객체를 만드는 것 보다는 클래스를 이용하여 만드는 것이
//훨씬 직관적이며 효율적임을 알 수 있었다.