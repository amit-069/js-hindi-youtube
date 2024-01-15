//singleton
//Object.create

//object literals
// const JsUser={
//     name:"Amit",
//     age:22,
//     location:"Gorakhpur",
//     email:"abc@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday","Saturday"]
// }
// console.log(JsUser.name);
// console.log(JsUser["age"]);

// console.log(JsUser);



//const tenderUser=new Object();
// const tenderUser={}
//     tenderUser.id="123abc",
//     tenderUser.name="sammy"
//     tenderUser.isLoggedIn=false


// console.log(tenderUser);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj6={obj1,obj2}
// console.log(obj6);
// const obj3=Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4};
console.log(obj3);