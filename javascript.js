// function grand(){
//     let a=10;
//     function par(){
//         let a =20;
//         function child(){
//             let c=30;
//             if(true){
//                 let c =40;
//             }
//         }
//     }
// }

// let message ="hello";
// function hi() {
//     console.log(message);
// }
// hi();// the function hi and the body are closure

// function grand(){
//     let s = "hello";
//     function child(){
//         return s;
//     }
//     return child;
// }

// let v = grand();
// let hi=v()
// console.log(hi)

//constructors

// function person(name,age) {
//     this.name=name;
//     this.age = age;
//     console.log(`hello Mr. ${name} welcome ur age is  ${age}`);
    
// }

// let person1 = new person("harsith", 20);
// console.log(person1);

// let obj = {
//     name :"harshith",
//     age : 20,

// }
// let arr = Array(1,2,3,4,5);
// console.log(Array.prototype)
// console.log(arr.forEach(element => {
//     console.log(element)
// }));
// console.log(1)
// setTimeout(() => {
//     console.log("delay of 2000ms");
// },0);
// console.log(3); 

//call apply bind

//call
// const pet = {
//     name:'Dollar',
//     age:12,
//     getdetails: function(name,age,a){
//         this.a +=a;
//         return `the name of the dog is ${this.name}  and the age of the dog is ${this.age} add two numbers ${this.a}`;
//     }
// }
// const child = {
//     name:"doller2",
//     age:11,
//     a:20
// }

// const details = pet.getdetails.call(child,"brownie",12,30);
// console.log(details);
// difference between call and apply is that we pass values(individual) in call where as in apply we pass arrays
//bind is just like call but the call function executes the function immediately but the bind makes a copy of the function and executes
// 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
// }
// let fullName = person.fullName.bind(member);
// console.log(fullName())

//async js

//call back used in async js when a piece of code is depended on the async code

// function askingquestion(callback){
//     setTimeout(()=>{
//         let watching_vids="coding vids";
//         callback(watching_vids);
//     },2000)
// }


// function whatareyoudoing(reply){
//     console.log(`i am watching ${reply}`);
// }
//  console.log("hey dude what are  you doing man")
//  askingquestion(whatareyoudoing);//here we are passing the whatareyoudoing as a parameter the reply in the fn depends on the async function so it returns the values after completion


//promise

// function getOrderDetails(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data = 'chicken';
//         if(data=='404')
//         reject(data);
//         else if(data!="404")
//         resolve(data);},3000)
//     })

// }
// function func1(order){
   
//     return new Promise((resolve)=>{
//      order+=" biryani"
//      resolve(order)
//     })
// }
// function func3(order){
//     console.log(`you have ordered the ${order}`)
// }
// function func2(error){
//     console.log(`${error} Error : we are facing an error`);
// }

// let rest =getOrderDetails()
// console.log(rest)


//async and await

// function getOrderDetails(){
//     return new Promise(resolve=>{
//     setTimeout(()=>{
//         let data = 'chicken';
//         resolve(data);},3)
//     })

// }

// async function start(){
// let rest = await getOrderDetails()
// console.log(rest)}

// start()


//promise chaining
// let success= false;
// let promise = new Promise((resolve,reject)=>{
//     return setTimeout(() => {
//         if(success){
//             resolve("this is a success");
//         }
//         else{
//             reject("this is a failure")
//         }
//     },1000);
// })

// async function func(){
//     this.details = await promise
//     return new Promise((resolve,reject)=>{
//         resolve(this.details)
//     })
// }

// async function func2(){
//     try {this.data = await func();
//     console.log(`this is in the try block${data}`);}
//     catch(error){
//         this.rejected = error
//         console.log(this.rejected)
//     }
// }
// func2();


//another example
let success = false ;

let promise = new Promise((resolve,rej)=>{
    resolve(success);
})

async function istrue(){
    this.ist = await promise;
    return new Promise((res,rej)=>{
        if(this.ist){
            res("it is a success");
        }
        else{
            rej("it is not a success")
        }
    })
}
async function message(){
    try{
        message=await istrue();
        console.log(message)
    }catch(error){
        this.error=error;
        console.log(error)
    }
} 
message()