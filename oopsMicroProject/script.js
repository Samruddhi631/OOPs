class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
    }
    ListAllBooks(){
        this.books.forEach(function(book){
            console.log(book)
        })
    }
}
class Book{
    constructor(name,isbn,author,price){
        this.name=name;
        this.isbn=isbn;
        this.author=author;
        this.price=price;
        this.readStatus=false
    }
    info(){
        console.log(`${this.readStatus ? "✅":"❌"} ${this.name} is the book written by ${this.author} and you have ${this.readStatus ? "read it":"not read it"} and is available on Amazon at prize range of ${this.price}  `)
    }
    changeReadStatus(){
        this.readStatus=!this.readStatus
    }
}
let khopoliLibrary=new Library()
khopoliLibrary.addBook("Do Epic Shit")
khopoliLibrary.addBook("Adventerous Life")
khopoliLibrary.ListAllBooks()
let b1=new Book("Adventerous Life","jgtuyt4355566dby","Samruddhi",340)
b1.changeReadStatus()
b1.info()