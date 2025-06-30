//purana tarika using constructor function when their was no class in js ->
// function Toffee(flavor,price,expiry){ 
//     this.flavor=flavor;
//     this.price=price;
//     this.expiry=expiry
// }
// t1=new Toffee("vanilla",1.25,"12-3-2023")
// t2=new Toffee("chocolate",2.25,"10-8-2024")
// t3=new Toffee("strawberry",1,"2-6-2023")
// console.log(t1)


// class Toffee{
//     constructor(flavor,price,expiry){
//         this.flavor=flavor;
//         this.price=price;
//         this.expiry=expiry
//     }
// }
// t1=new Toffee("vanilla",1.25,"12-3-2023")
// t2=new Toffee("chocolate",2.25,"10-8-2024")
// t3=new Toffee("strawberry",1,"2-6-2023")
// console.log(t1)

// class Toffee{
//     constructor(name){
//         this.name=name
//     }
// }
// Toffee.prototype.price=2
// t1=new Toffee("alpenlipbee")
// console.log(t1.price)

class Human{
    constructor (name,age,isHandsome){
        this.name=name;
        this.age=age;
        this.isHamdsome=isHandsome
    }
}
Human.prototype.sayHello=()=>{
    console.log("Hello")
}

t1=new Human("samruddhi",19,true);
t1.sayHello()