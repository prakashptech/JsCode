
//bind method
// let name = {
//     fName:"prakash",
//     lName:"paswan"
// }
// let x = function (){
//     console.log(this.fName+ ' ' + this.lName);
// }
// let printmyName = x.bind(name);
// printmyName();

// map function
// arr = [12,34,5,0];
// let x = arr.map((e)=>{
//     return e+1
// })
// console.log(x);



// for Each function


// arr = [1,8,9,3]
// arr.forEach((e,i,array)=>{
//      array[i] = e+1
// })
// console.log(arr);


// prototype

// a= [1,2,34,8]
// Array.prototype.sqrt = function (){
//     for (let i=0; i<this.length; i++){
//         this[i]=this[i]*this[i];
//     }
// }
// a.sqrt();
// console.log(a);


// array distructuring
// let a,b;
// [a,b] = [6,9];
// console.log(a,b);

// const num = [12,3,4,5,9];
// [a,b,...c] = num;
// console.log(a,b,c);


// const student={
//     name:'mohan',
//     age:23,
//     grade:'a',
//     subject:'SpeechSynthesisUtterance',
//     start:function () {
//         console.log('started');
//     }

// }

// const {name,age,grade,subject,start} = student;
// console.log(name,age,grade,subject)
// start()


const ob = {
    name:'prakash',
    age:23,
    foo: function () {
        console.log(this.name + "" +this.age)
    }
}
const ob1 = {
    name:'rajeev',
    age:23,

}
ob.foo.call(ob1,'nillu', 'chhoti');
ob.foo.apply(ob1,[['nillu'],['roshan']]);