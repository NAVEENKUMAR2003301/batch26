// // // variables 


// // // var     - global scope and function scope

// // // let     - block scope

// // // const   - block scope


// // // var 


// // var a = 10   // declration // intialization

// //     a = 15   // reuse      // reintialiazation
    
// // var a = 20   // redeclration 

// // console.log("var :-",a);

// // // let 


// // let b = 50 // dec  // inti

// //     b = 55 // reuse // reInti

// // // let b   // not accept reDec

// // console.log("let :-",b);


// // // const 

// // const c = 22

// //     //   c = 30   not accept reuse , reintialiazation

// // // const c = 44   not redeclration

// // console.log("const :-",c);




// // // Examples 

// // 1. Which keyword allows redeclaration and reinitialization in JavaScript?
// // // var
// // 2. What will be the output?

// // var x = 10;
// // x = b 20;
// // var x = 30;
// // console.log(x); 

// // // 30

// // 3. Which keyword does NOT allow redeclaration but allows reinitialization?

// // // let 

// // 4. What will happen if you try to redeclare a variable using `let`?

// // // syntex error

// // 5. What will be the output?
// // let y = 5;
// // y = 15;
// // console.log(y);

// // // 15

// // 6. Which keyword does NOT allow redeclaration and reinitialization?

// // // const

// // 7. What will happen if you try to reassign a value to a `const` variable? 

// // // TypeError

// // 8. What will be the output?
// // const z = 100;
// // console.log(z);

// // // 100

// // 9. Which keyword should be used when the value should never change?

// // // const

// // 10. Identify the error (if any):
// // const a = 10;
// // const a = 20;
// // console.log(a);

// // // syntex error ,  typeError

// // const a = 10;
// // const a = 20;
// // console.log(a);



// // Printing Statement


// // console.log()

// let a1 = 10

// console.log(a1);
// console.log(100);



// // alert()

// // alert("hello welcome all")

// // confirm()

// // confirm("do you like js") 

// // prompt()

// // prompt("what is ur name")

// // document.writeln()

// // document.writeln("123")


// // i want to know and print user name

// // let userName = prompt("what is ur name")

// // console.log(userName);


// // i want to show pop "hi" to user side

// // alert("hi")

// // directly i want access in ui side (123)

// // document.writeln(123)


// // console method 


// // 1. console.log()

// console.log(100);


// // 2. console.warn()

// console.warn(100);


// // 3. console.error()

// console.error(100);


// // 4. console.clear()

// console.clear()



// // DataType

// // primitive datatype

// // 1. string - ""

// let a2 = "navi"

// console.log(typeof(a2));


// // 2. number 

// let num = 122

// console.log(typeof(num));


// // 3. boolean

// let boo = false 

// console.log(typeof(boo));


// // 4. undefined

// let aa ;

// console.log(aa);


// // 5. null

// // let bb = prompt()

// // console.log(bb);


// // non primitive datatype

// // 1. array // index

// // []

// let fruit = ["cherry","apple","orange","banana","guava","pineApple","mango","tomoto"]

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[3]);

// console.log(fruit[0]);
// console.log(fruit[fruit.length-1]);




// // 2. object // dot

// // {}

// let fruit1 = {
//     redFruit    : ["cherry","apple"],
//     yellowFruit : ["banana","pineApple","mango"],
//     remainFruit : ["orange","guava"],
//     veg         : "tomoto"
// }

// console.log(fruit1.veg);
// console.log(fruit1.yellowFruit[1]);
// console.log(fruit1.redFruit[1]);

// console.clear()

// // operators

// // 1. arithmetic operator 


// // name               operators simple           result

// // addition                 +                     (5+5) = 10

// // subraction               -                      (5-5) = 0

// // multiplication           *                      (5*5) = 25

// // division                 /                       (5/5) = 1

// // modulus                  %                        (5%5) = 0

// // exponencial             **                        (5**5) = 5^5 = 5*5*5*5*5 = 3125

// // increment operator ++ = +1

// // post inc = var++

// // pre  inc = ++var

// // examples 

// let num1 = 1      // null

//     num1 = ++num1  // 1

//     console.log(num1);


// let num2 = 5

//     num2 = ++num2

//     console.log(num2);


// let num3 = 2     

// let num4 = num3++ 

// console.log("num3 : ",num3); // num3 : 3
// console.log("num4 : ",num4); // num4 : 2

// console.clear();



// let num5 = 2      // 
// let num6 = num5-- // 2
// let num7 = ++num6 // ++num6 = 1+2 = 3

// console.log("num5 : ",num5); // num 5 : 1
// console.log("num6 : ",num6); // num 6 : 3
// console.log("num7 : ",num7); // num 7 : 3






// // 2. assignment operator

// let num11 = 10

// num11     = num11 + num11 
  

// console.log(num11);

// let num12 = 2

// let additionVal = 100

// num12 **= additionVal 

// console.log(num12);


// console.clear();





// // 3. comparision or relational operator

// // meaning   operator      examples       results 

// // lessThen     <            5<3            false

// // greaterThen  >            5>3            true

// // lessThenEq   <=           5<=40           true

// // greaterThenEq >=          5>=.50          true

// // loosyTypeEq   ==           5=="5"         true

// // loosynotEq    !=           5!="5"         false

// // strictlyTypeEq  ===        5==="5"        false

// // strictlyNotEq   !==        5!=="5"        true


// console.log(5 === "5"); // false
// console.log(5 != "5");  // false
// console.log(5 !== "4"); // true






// // 4. logical operator

// // AND    - &&

// // true && true && true = true 

// // false && true && true = false 

// // false && false && false = false

// // // OR     - ||

// // true || true || true = true 

// // false || false || false = false 

// // true || false || false = true

// // // NOT    - !

// // !(true) = false 

// // !(false) = true


// console.log((5==="5") && (3!=5) && (4===4)) // false 

// // false && true && true = false


// console.log((5===.5) || (0) || (1===1)); // true 

// // false || false || true = true 

// console.log(!(2>3)); // true

// // !(false) = true


// console.log(!(5!=="5") && (7>.7) || (false)); // false

// // !(5!=="5") = !(5!=="5") = false

// // (7>.7) = true

// // false && true = false

// // false || false = false 



// // 5. ternary operator

// // syntex 

//  // condition ? statement : statement ;

//  // example 

 

//  (5==="5") ? console.log("welcome page") : console.log("your password wrong");
 
 

//  // concatination +

//  let str1 = "iron"

//  let str2 = "man"

//  console.log(str1 + " " +str2); 

//  // Template String

//  let str3 = "spider"
//  let str4 = "man"

//  console.log(`${str3} ${str4}`);

//  console.clear();
 

//  // Type Conversion 

//  // 1. Implicit Type Conversion 

//  console.log(typeof("11" + 1));

//  // string 

//  // string anything string

//  console.log(typeof("1" + "1"));
//  console.log(typeof("1" + 1));
//  console.log(typeof("1" + true));
//  console.log(typeof("1" + undefined));
//  console.log(typeof("1" + null));
//  console.log(typeof("1" + [1,2,3]));
//  console.log(typeof("1" + {k:1}));


//  // number 

//  console.log(typeof(1 + "1"));
//  console.log(typeof(1 + 1));
//  console.log(typeof(1 + true));
//  console.log(typeof(1 + undefined));
//  console.log(typeof(1 + null));
//  console.log(typeof(1 + [1,2,3]));
//  console.log(typeof(1 + {a:1}));

//  // boolean 

//  console.log(typeof(true + "1"));
//  console.log(typeof(true + 1));
//  console.log(typeof(true + true));
//  console.log(typeof(true + undefined));
//  console.log(typeof(true + null));
//  console.log(typeof(true + [1,2,3]));
//  console.log(typeof(true + {g:1}));
 

//  // 2. Explicit Type Conversion

//  console.log(12 + Number("11"));

//  // Number 

//  console.log(Number());
//  console.log(Number(""));
//  console.log(Number("123"));
//  console.log(Number("abc")); // 1
//  console.log(Number(undefined)); // 0
//  console.log(Number(12));
//  console.log(Number(true));
//  console.log(Number(false));
//  console.log(Number(null));
//  console.log(Number([123,456]));
//  console.log(Number({k:1}));


//  // Boolean

//  console.log(Boolean());
//  console.log(Boolean(""));
//  console.log(Boolean("123"));
//  console.log(Boolean("abc"));
//  console.log(Boolean(undefined));
//  console.log(Boolean(12));
//  console.log(Boolean(0));
//  console.log(Boolean(-1));
//  console.log(Boolean(true));
//  console.log(Boolean(false));
//  console.log(Boolean(null));
//  console.log(Boolean([1,2,3]));
//  console.log(Boolean({j:4}));

// console.clear();


//  // flow control statement

//  // 1. conditional statement
 
 



//  // 1. if statement

//  // if(condition){// statement}

//  // condition true = allow

//  // example 

//  if(5=="5"){
//     console.log("true value");
//  }




//  // 2. if else statement

//  // if(condition){//statement}else{//statement}

//  // condition true = if , false = else

//  // example 

//  if(8>7){

//     console.log("true part");
    

//  }else{
//     console.log("false part");
    
//  }



//  // 3. else if statement

// //  let hour = prompt("enter the time 1 to 24")

// //  if(hour >= 1 && hour <= 6 ){

// //     alert("good morning");
    
// //  }else if(hour >= 7 && hour <= 12){

// //     alert("morning");
    
// //  }else if(hour >= 13 && hour <= 16){
// //     alert("good Afternoon");
    
// //  }else if(hour >= 17 && hour <= 19){
// //     alert("good evening");
    
// //  }else{
// //     alert("good night");
    
// //  }




//  // 4. nested if statement 

// //  let age = prompt("enter your age")
// //  let height = prompt("enter your height (cm)")
// //  let weight  = prompt("enter your weight (kg)")

// //  if(age >= 18){
// //     if(height >= 155){
// //         if(weight >= 55){
// //              alert("congatulation your selected😊😊");
             
// //         }else{
// //             alert(`your weight is ${weight}kg, not enough`);
            
// //         }
// //     }else{
// //         alert(`your height is ${height}cm, not enough`);
        
// //     }
// //  }else{
// //     alert(`your age is ${age} old, not enough`);
    
// //  }




//  // 5. switch case statement

// //  switch(){
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //  }


// // example 

// // let trafficLight = ""

// // switch(trafficLight){
// //     case "red" : console.log("stop vechile"); break;
// //     case "yellow" : console.log("start vechile"); break;
// //     case "green"  : console.log("goo goo"); break;
// //     default : console.log("careful");
    
// // }



//  // 2. looping statement

//  // 1 to 5

//  console.log(1);
//  console.log(2);
//  console.log(3);
//  console.log(4);
//  console.log(5);

//  // for loop

//  // for(intialiazation ; condition ; iteration){// statement}

//  // example

//  for(let i = 1 ; i <= 5 ; i++){

//     console.log(i); // 1 2 3 4 5
    
//  }

//  // flow 
  

//  // i = 1 ; 1 <= 5 = true ; 1++ = 2
//  // i = 2 ; 2 <= 5 = true ; 2++ = 3
//  // i = 3 ; 3 <= 5 = true ; 3++ = 4
//  // i = 4 ; 4 <= 5 = true ; 4++ = 5
//  // i = 5 ; 5 <= 5 = true ; 5++ = 6
//  // i = 6 ; 6 <= 5 = false;

//  // odd number

//  // 1 to 10 odd number want print 


//  for(let i = 1 ; i <= 10 ; i++){
    
//     if(i%2==0){

//         console.log("even :", i);
        

//     }
    
//  }

//  // while loop 

//  // intialiazation
//  // while(condition){
//  // statement
 
//  // iteration
//  //}


//  let value = 3
//  while(value >= 10){

//     console.log(value);

//     value--
    
//  }


//  // val = 3 ;  3 >= 0 = true ; l v = 3 ; 3-- = 2
//  // val = 2 ;  2 >= 0 = true ; l v = 2 ; 2-- = 1
//  // val = 1 ;  1 >= 0 = true ; l v = 1 ; 1-- = 0
//  // val = 0 ;  0 >= 0 = true ; l v = 0 ; 0-- = -1
//  // val = -1;  -1 >= 0 = false.

//  // do while loop 

//  // intialiazation

//  // do{// statement // iteration}

//  // while(condition)


//  // example

//  let val1 = 3

//  do {
//    console.log(val1);

//    val1--;
//  } 
 
//  while (val1 >= 0);

//  // for of loop

//  // string , array , function

//  // syntex

// //  for(let a of variable){
// //     console.log(a);
    
// //  }

// let str6 = "javascript"
// let array1 = ["apple","orange","banana","pineapple"]

// for(let a of array1){
//     console.log(a);
    
// }

//  // for in loop

//  // object

//  let emp = {
//     name1 : "john",
//     role  : "developer",
//     salary : 1000000
//  }

//  for(let b in emp){
    
//     console.log(emp[b]);
    
//  }
 

//  console.clear();

//  // 1 to 10 inside prime number will find

//  for(let i = 2 ; i<=10 ; i++){

//    let isPrime = true

//    for(let j = 2 ; j<=i/2 ; j++){

//       if(i%j==0){

//          isPrime = false

//          break;
//       }  
//    }
//    isPrime ? console.log(`prime : ${i}`) : console.log(`not prime : ${i}`);
   
//  }

//  console.clear();
 


// // 3. function

// // reusable code
// // callback
// // reduce time
// // easy understand , maintain
// // abstraction
// // easy debug
// // block code


// // syntex

// // function one(paremeter){
// //    // statement - printing , loop , conditional
// //    // return
// //    // yeild
// // }

// // one("argument")


// // example

// function two(){
//    console.log("hello");  
// }

// two()

// // paremeter & argument


// function three(a){
//    console.log(a);
   
// }

// three("hello1")

// // return - reusable the value


// function reUse1(a){
//    return a
// }

// let newMem = reUse1(100);

// // console.log(reUse1(100));

// console.log(newMem);



// function four(){

//    console.log("four :",newMem);
   
// }

// four()



// // reusable code 

// function form(a,b,c){
//    console.log("name :",a);
//    console.log("department : ",b);
//    console.log("gender : ",c);


 
   
// }

// form("kamal","ece","m")
// form("praveen","ece","m")
// form("livin","ece","m")

// console.clear();


// // types of function :- 


// // syntex 


// // 1. named function 
// named("named function")

// function named(parameter){
//    console.log(parameter);
   
// }


// // 2. annonymous function


// var annonymous = function(parameter){
//    console.log(parameter);
   
// }

// annonymous("Annonymous function")


// // 3. arrow function


// var Arrow = (parameter)=>{
//    console.log(parameter);
// }

// Arrow("Arrow Function")


// // SCOPES

// function checkScope(){
//    if(true){
//       var a11 = "global scope and function scope"
//       let b11 = "block scope"
//       const c11 = "block scope1"
//       console.log(b11);
//       console.log(c11);
//    }

//    console.log(a11);
   
   
   
// }

// checkScope()



// // hoisting


// console.log(a12);

// var a12 = 10


// let b12 = 12
// console.log(b12);


// const c12 = 11

// console.log(c12);

// console.clear();



// // callback function and higher order function



// function function1(){
//    console.log("higher order function");
   
// }

// function function2(){
//    console.log("callback function");
   
// }


// function1(function2())



// //  example


// function add(callback,a,b){ // call = sub, a = 20 , b = 40
//    console.log(a+b);        // 20 + 40 = 60
//    callback(20,20)          // sub(20,20)
// }


// function sub(num1,num2){ //n1 = 20 , n2 = 20
//    console.log(num1-num2); // 20-20 = 0
   
// }


// add(sub,20,40) //

// // 20  60
// // 0   0 



// // currying


// function a(a){
//    return function(b){
//       return function (c){
//          console.log(a+b+c);
         
//       }
//    }
// }

// a(20)(30)(40)


// // IIFE - self invoke function

// (function (product,discount) {
//   alert(`now sales going on product :- ${product} , on discount ${discount}% `)
// })("shoes",90);


function form1(a,b,c="no"){
   console.log("name :-",a);
   console.log("blood grb :-",b);
   console.log("disability :-",c);
   
}

form1("kamal","b+ve")


// generator function


function* generator(){
   yield "you get 50% off",
   yield "you get 10% off",
   yield "try again see next",
   yield "try again",
   yield "you got 100% cashback"
}

let genVal = generator()

console.log(genVal.next().value);
console.log(genVal.next().done);
console.log(genVal.next().value);
console.log(genVal.next().value);
console.log(genVal.next().value);

console.clear();


// Data Starcture 

// spread operator 

// array , object

// [...] , {...}

// we can two array , object merge value and take clone

// array spread operator

let array1 = [1,2,3,4]

let array2 = [5,6,7,8]

let newArr = [...array1,...array2,9,10]

console.log(newArr);

// object spread operator

let obj1 = {
   name1 : "a",
   role  : "traniee",
   salary: 100000
}

let obj2 = {
   name1 : "b",
   role1  : "developer",
   salary1: 4000000
}

let newObj = {...obj1,...obj2,salary : 200000}

console.log(newObj);






// rest operator

// function

// (...)

// we can store mulitiple argument in single parameter


function adding(a,b,c,...d){
   let remainVal = d
   
   console.log(remainVal);
   
   console.log(a+b+c+remainVal[0]);
}

adding(1,2,3,4,5,6,7,8)


// destracture

let arr1 = [1,2,3,4]

let a1 = arr1[0]
let a2 = arr1[1]
let a3 = arr1[2]
let a4 = arr1[3]

console.log(a1 + a4);

// destaracture array

let [b1,b2,b3,b4] = arr1


console.log(b1 + b4);


// object 

let object1 = {
   name1 : "john",
   role  : "developer"
}

let c1 = object1.name1
let c2 = object1.role

console.log(c1,c2);


// destracture of object

let {name1,role} = object1

console.log(name1 , role);


// nested array

let nested = [1,2,3,[4,5,6,[7,8]]]

let d1 = nested[0]
let d4 = nested[3][0]
let d7 = nested[3][3][0]
let d8 = nested[3][3][1]

console.log(d1,d4,d7,d8);

// destracture 

let [e1,e2,e3,[e4,e5,e6,[e7,e8]]] = nested

console.log(e1,e4,e7,e8);

console.clear();




// array advance Concept (Es6)


// Array manipulate method


// if you are use adding method, you can add multiple value.

// if you are use remove method, you can remove only one value

let normalArr = [0,1,2,3,4,5,6,"hello",true,undefined,null,[1,2,3],{k:1}]

console.log(normalArr);
console.log(normalArr[0]);
console.log(normalArr[3]);


console.log(normalArr[0]);
console.log(normalArr[normalArr.length-1]);


// homogeneous

// hetrogenous

// flexible


let new1 = [1,2,3,4]


// push()     - u can add last side of array value

new1.push(5,6,7,8)

// pop()      - u can remove last side of array value.

new1.pop()
new1.pop()

// shift()    - u can remove first side of array value.

new1.shift()

// unshift()  - u can add first side of array value.

new1.unshift(0,1)
console.log(new1);

// splice() // startingIndex , removeCount , AddingValue

let new2 = [1,2,3,40,50,60,7]

new2.splice(3,3,4,5,6)

console.log(new2);

let example = [1,2,3,4] // 1,2,3,"four","five"

example.splice(3,1,"four","five")

console.log(example);

console.clear();


// merge method - it will return value


// 1.concat()

let arr11 = [1,2,3,4]
let arr12 = [5,6,7,8]

let newArr11 = arr11.concat(arr12,9,10,11);

console.log(newArr11);


// 2.slice()

let arr14 = [1,2,3,"a","b","c",4,5,6]

let sliceVal = arr14.slice(3,6) // StartingIndex , EndingIndex +1

console.log(sliceVal);



// 3.flat()

let nested1 = [1,2,3,[4,5,6,[7,8,[9,10,[11]]]]]

let nestedVal = nested1.flat(Infinity)

console.log(nestedVal);



// 4.fill()

let arr15 = [1,2,3,4] // 1,2,3,"four"

arr15.fill("four",3,4) // value,sI,EI + 1

console.log(arr15);



// 5.includes()

let arr16 = [10,40,50,20,44]

let includesVal = arr16.includes(44)

console.log(includesVal);




// 6.sort()

let arr17 = [1.456,1.555,1.678,1.8,1.2000,1.5] 

let sortVal = arr17.sort()

console.log(sortVal);




// 7.indexOf() 

let random1 = [1,2,3,4,3,2,3,9,8,3,1]

let indexOfVal = random1.indexOf(3,7) // value , FromIndex

console.log(indexOfVal);


// 8.lastIndexOf()

let lastIndexOfVal = random1.lastIndexOf(3,8)// value ,FromIndex

console.log(lastIndexOfVal);


// 9.reverse()


let arr18 = [1,2,3,4]

let reverseVal = arr18.reverse()

console.log(reverseVal);

console.clear();




// Array higher order method

let games = ["cricket","football","volleyball","kabadi","golf"]

// 1. forEach()

let newForEach = games.forEach((currentElement,index,TotalArray)=>{
   return("forEach :",currentElement);
  
})

console.log(newForEach);


// 2. map()

let newMap = games.map((c,i,t)=>{

   return("map :",c);
   
})

console.log(newMap);


// 3. filter() 

let employee = [
   {name1 : "a" , salary : 100000},
   {name1 : "b" , salary : 200000},
   {name1 : "c" , salary : 300000},
   {name1 : "d" , salary : 400000},
   {name1 : "e" , salary : 500000},
]

let employeeSalary = employee.filter((c,i,t)=>{

   return c.salary > 200000

})

console.log(employeeSalary);


// 4. find()


let employeeSalary1 = employee.find((c,i,t)=>{
   return c.salary > 200000;
})

console.log(employeeSalary1);


// 5. reduce()

employee = [
  { name1: "a", salary: 100000 },
  { name1: "b", salary: 200000 },
  { name1: "c", salary: 300000 },
  { name1: "d", salary: 400000 },
  { name1: "e", salary: 500000 },
];

let TotalSalary = employee.reduce((acc,c,i,t)=>{
   return acc + c.salary

   //  0 + 1 = 1
   //  1 + 2 = 3
   //  3 + 3 = 6
   //  6 + 4 = 10
   //  10 + 5 = 15

   // return 15 

},0) // 1 // 3 // 6 // 10 // 15

console.log(TotalSalary);


// 6. some()  - OR

let someVal = [1,2,3,4]

let some1 = someVal.some((c,i,t)=>{

   return  c%2==0

   // 1%2==0 false
   // 2%2==0 true
   // 3%2==0 false
   // 4%2==0 true

   // false || true || false || true = true

})

console.log(some1);


// 7. every() - AND

let everyArr = [2,2,2,2]

let everyVal = everyArr.every((c,i,t)=>{
   return c%2==0
})

console.log(everyVal);



// 8. sort()

let randomArr = [2,1,356,4,2345,5,60000,8]

// 1 2 4 356 5 2345 8 60000

// 1 2 4 5 356 8 2345 60000

// 1 2 4 5 8 356 2345 60000

let sortVal1 = randomArr.sort()

console.log(sortVal1);


let higherSort = randomArr.sort((a,b)=>{
   return b-a
})

console.log(higherSort);


// covertion method  arr to str


// toString()

let raArrVal = [1,2,3,4]

let strArr = raArrVal.toString()

console.log((strArr));


// join()

let joinArr = raArrVal.join(4)

console.log(joinArr);


let abc1 = [1,2,3,4] // 1,2,"three",4

// let abc = [1, 2, 3, 4];

// abc.splice(2, 1, "three");

// console.log(abc);


console.clear();


// String Methods 

// charAt(), in --> val

let str = "javascript"

let charAtVal = str.charAt(9)

console.log(charAtVal);






// charCodeAt(), in --> asscii value

let charCodeAtVal = str.charCodeAt(1)

console.log(charCodeAtVal);





// length, 

let lengthVal = str.length

console.log(lengthVal);


str = "javaScript";

// slice(),

let sliceVal1 = str.slice(4,10) // Si ,Ei+1

console.log(sliceVal1);



// toUpperCase(), 

let upper = str.toUpperCase()

console.log(upper);

console.log(str);

// toLowerCase(), 

let lower = str.toLowerCase()

console.log(lower);


// trim(), - 

let str1 = " hello "

console.log(str1);


let trimVal = str1.trim()

console.log(trimVal);

// trimStart()

let trimStart = str1.trimStart()

console.log(trimStart);


// trimEnd()

let trimEnd = str1.trimEnd()

console.log(trimEnd);


// includes(),

let str2 = "hello world"

let inc = str2.includes("H")

console.log(inc);




// split(), 

let str3 = "iron-man"

let splitVal = str3.split("-")

console.log(splitVal);




// indexOf(), 

let str4 = "hello world"

let ind1 = str4.indexOf("l",4) // value,Fi

console.log(ind1);


// lastIndexOf()

let lastInd = str4.lastIndexOf("l",8)

console.log(lastInd);


// replace(), 

let str5 = "pythonDeveloper"

let replaceVal = str5.replace("python","javascript") // change , changed

console.log(replaceVal);


// startsWith(), 

let str6 = "hello"

let start1 = str6.startsWith("o")

console.log(start1);



// endsWith()

let last1 = str6.endsWith("h")

console.log(last1);


// repeat

let str7 = "welcome"

let repeatVal = str7.repeat(111)

console.log(repeatVal);

console.clear();


// Date 

let date1 = new Date()

console.log(date1);


// get()

// year

let year1 = date1.getFullYear()

console.log(year1);

// Date 

let date2 = date1.getDate()

console.log(date2);

// month 

let month = date1.getMonth()

console.log(month);

// day  

let day = date1.getDay()

console.log(day);

// hours

let hour = date1.getHours()

console.log(hour);

// minutes 

let minutes = date1.getMinutes()

console.log(minutes);

// seconds 

let seconds = date1.getSeconds()

console.log(seconds);

// local date 

// time 

let time = date1.toLocaleTimeString()

console.log(time);

// date 

let date3 = date1.toLocaleDateString()

console.log(date3);

// time / date 

let all = date1.toLocaleString()

console.log(all);



// set()

let date11 = new Date()

console.log(date11);

// year 

 date11.setFullYear(2003)

console.log(date11);

// month 

date11.setMonth(9)

console.log(date11);

// Date 

date11.setDate(23)

console.log(date11);

// hour 

date11.setHours(15)

console.log(date11);

// minutes

date11.setMinutes(55)

console.log(date11);

// seconds 

date11.setSeconds(55)

console.log(date11);


// Birthday day finder 

// let year5  = prompt("enter your dob year ")
// let month5 =prompt("enter your dob month in number")
// let date5  = prompt("enter your dob date ")

// let rawdate = new Date()

// rawdate.setFullYear(year5)
// rawdate.setMonth(month5-1)
// rawdate.setDate(date5)


// let day5 = rawdate.getDay()


// let dayraw = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]


// alert(dayraw[day5]);

console.clear();


// Asyncronous 

// setTimeOut

// syntex 

// setTimeout(()=>{

//    console.log("hello");
   

// },5000)

// SetTimeInterval

// let time2 = document.querySelector(".time")

// setInterval(()=>{
//    let time = new Date()

//    let time1 = time.toLocaleTimeString()

//    time2.innerHTML = time1
   
// },1000)


// function one(){
//    console.log("one");
   
// }

// function two(){
//    console.log("two");
   
// }

// function three(){
//    console.log("three");
   
// }

// one()
// setTimeout(two,0)
// three()

// Promise Api


// resolve data  - successful data  - then()
// reject  data  - error data       - catch()
// bending data  - coming data      - finally()

// fetch Api

// api link inside data store you want means u can use fetch.

// let api = "https://fakestoreapi.com/products/"

// fetch(api).then((data)=>{
//    // json to js = json() , js to json = stringify()
//    return data.json() 
// })
// .then((data77)=>{
//    data77.forEach((c,i,total)=>{

//       console.log(c.title);
      

//    })
   
// })
// .catch((error)=>{

//    console.warn(error.message);
   

// })
// .finally((r)=>{
//    console.log(r);
   
// })


console.log("dffffffffffffffffffffffffffff");


// how to find leap year 


let year = 2028



if(year % 4 === 0 ){ // 2028 % 4 === 0 true
   if(year % 100 !== 0){ // 2028 % 100 !== 0 true
      if(year % 400 === 0){ // 2028 % 400 ===0 true

         console.log("leap year");
         

      }else{
         console.log("not leap year");
         
      }
   }else{
      console.log("leap year");
      
   }
}else {
   console.log("not leap year");
   
}


















































// // 4. date

