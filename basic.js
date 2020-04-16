//const s1='hello';
//console.log(typeof s1);

//const s2=new String('hello');
//console.log(typeof s2);

//console.log(window);
//alert(1);
//console.log(navigator.appVersion);

//object literals
//const book1 = {
  //  title:'Book one',
 //author:'john Doe',
 //year:'2013',
 //getsummary: function(){
    //    return `${this.title} was written by ${this.author} in ${this.year}`;
   // }
//};

//const book2 = {
    //title:'Book two',
    //author:'jame Doe',
    //year:'2016',
    //getsummary: function(){
        //return `${this.title} was written by ${this.author} in ${this.year}`;
    //}
//};
//console.log(book2.getsummary());
//console.log(Object.values(book2));
//console.log(Object.keys(book2));


//constructor
//function book(title,author,year){
    //this.title=title;
    //this.author=author;
  //  this.year=year;
    //this.getsummary=function(){
    //return `${this.title} was written by ${this.author} in ${this.year}`;
    //}
//}
//prototype
//getsummary
//book.prototype.getsummary=function(){
  //  return `${this.title} was written by ${this.author} in ${this.year}`;
//};
//get age
//book.prototype.getage=function(){
    //const years=new Date().getFullYear()-this.year;
    //return `${this.title} is ${years}years old`;
//}

//revise/change year
//book.prototype.revise=function(newyear){
    //this.year=newyear;
    //this.revised=true;
//};

//instatiate an object
//const book1=new book('book one','john','2013');
//const book2=new book('book two','jame','2016');
//console.log(book2);
//book2.revise('2020');
//console.log(book2);

//magazine constructor
//function magazine(title,author,year,month){
  //  book.call(this,title,author,year);
    //this.month=month;
//}

//inherit prototype
//magazine.prototype=Object.create(book.prototype);

//insyantaite magazine object
//const mag1=new magazine('mag1','john','2019','jan');

//use magazine constructor
//magazine.prototype.constructor=magazine;

//console.log(mag1);

//object of protos
//const bookprotos={
  //  getsummary:function(){
    //    return `${this.title}was written by ${this.author} in ${year}`;
    //},
    //getage:function(){
    //const years=new Date().getFullYear()-this.year;
    //return `${this.title} is ${years}years old`;

    //}
//};

//create Object
//const book1=Object.create(bookprotos);
    //book1.title='book one';
    //book1.author='john';
    //book1.year='year';

    //const book1=Object.create(bookprotos,{
        //title:{value: 'book one'},
        //author:{value:'john'},
        //year:{value:'2013'}
    //});

//console.log(book1);

//classes
class book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getsummary(){
        return `${this.title}was written by ${this.author}in ${this.year}year`;
    }
    getage(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is ${this.years}years old`;
    }
    //revirse(newyear){
      //  this.year=newyear;
        //this.revirse=true;
    //}

    //static topbookstore(){
      //  return 'barnes&noble';
    //}

}

//instantiate object
//const book1=new book('book1','john','2020');
//console.log(book1);
//book1.revirse('2021');
//console.log(book1);

//console.log(book.topbookstore());

//subclass
//magazine subclass
class magazine extends book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}

//instantiate magazine
const mag1=new magazine('mag1','john','2020','jan');

console.log(mag1.getsummary());



