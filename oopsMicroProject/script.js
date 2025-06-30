// class Library{
//     constructor(){
//         this.books=[];
//     }
//     addBooks(books){
//         this.books.push(...books);
//     }
//     ListAllBooks(){
//         this.books.forEach(function(book,index){
//             console.log(`${index+1}) ${book.name} by ${book.author}`)
//         })
//     }
// }
// class Book{
//     constructor(name,isbn,author,price){
//         this.name=name;
//         this.isbn=isbn;
//         this.author=author;
//         this.price=price;
//         this.readStatus=false
//     }
//     info(){
//         console.log(`${this.readStatus ? "✅":"❌"} ${this.name} is the book written by ${this.author} and you have ${this.readStatus ? "read it":"not read it"} and is available on Amazon at prize range of ${this.price}  `)
//     }
//     changeReadStatus(){
//         this.readStatus=!this.readStatus
//     }
// }
// let khopoliLibrary=new Library()
// let b1=new Book("Adventerous Life","jgtuyt4355566dby","Samruddhi",340);
// let b2=new Book("Do Epic Shit","bjhguyg4cedrsrv","Kavya",450)
// let b3=new Book("Crazy Life","bduygdc576tbjhh","Jayesh",500)
// b1.changeReadStatus()
// b1.info()
// khopoliLibrary.addBooks([b1,b2,b3])
// khopoliLibrary.ListAllBooks()

class MobileShop{
    constructor (){
        this.mobiles =[]
    }
    addMobiles(mobiles){
        this.mobiles.push(...mobiles)
    }
    removeMobile(mobile){
       let index= this.mobiles.indexOf(mobile);
       this.mobiles.splice(index,1);
    }
    listOfMobiles(){
        this.mobiles.forEach(function(mobile,idx){
            console.log(`${idx+1}) ${mobile.brand} ${mobile.model} in color ${mobile.color} and prize is ${mobile.price}`)
        })
    }
}
class Mobile{
    constructor (brand,model,color,price){
        this.id=Math.floor(Math.random()*10000);
        this.brand=brand;
        this.model=model;
        this.color=color;
        this.price=price;
        this.sims=[]
    }
    getMobileInfo(){
        console.log(`${this.brand}-${this.model}=${this.price}-${this.color}`)
    }
    insertSim(sim){
        if(this.sims.length===2){
            console.log("you have already inserted two sims")
        }
        else{
            this.sims.push(sim);
        }
    }
}

class Sim{
    constructor(brand,balance){
        this.brand=brand;
        this.balance=balance;
    }
    addBalance(balance){
        if(balane<0){
            console.log("to add balance give amount greater then zero");
            return
        }
        this.balance+=balance
    }
}
let myPhoneShop=new MobileShop();
let Samsung=new Mobile("Samsung","S23","black",100000)
Samsung.getMobileInfo();
let Vivo=new Mobile("Vivo","V29","sky blue",50000)
Vivo.getMobileInfo();
let tataDocomo=new Sim("tataDocomo",300)
Samsung.insertSim(tataDocomo);
myPhoneShop.addMobiles([Samsung,Vivo]);
// myPhoneShop.removeMobile(Vivo);
myPhoneShop.listOfMobiles();