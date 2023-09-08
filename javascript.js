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
console.log(1)
setTimeout(() => {
    console.log("delay of 2000ms");
},0);
console.log(3); 