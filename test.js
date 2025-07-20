const f=function(){
    console.log(1);
}
f()

const g=()=>console.log('I am g');
g()

//create object directly
// object: key:value(function)
const car1={
    date:`12/11`,
    index : 12 ,
    brand : 'benz',
    Hi: function(){
        console.log(`buy date is ${this.date}, index is ${car1.index}, brand is ${car1.brand} `);
    },
    why : ()=> console.log(`why`)
}
car1.Hi()
car1.why()
//create object by constructor function
//constructor function is also a special method to construct an object
function Hello(name){
    this.name=name;
    this.display=()=>
        console.log(`you are ${name}`);
    
}


const obj=new Hello('Grace');
console.log(obj.name);
obj.display();
//create object by blueprint(class)
//class
class Human{
    age=0;
    static key=`Human`;
    constructor(age,height,name){
        this.age=age;
        this.height=height;
        this.name=name;
    }
    display(){
        console.log(`you are ${this.age} year old`);
        console.log(`your heights are ${this.height}`);
        console.log(`your name is ${this.name}`);
    }
    static introduce(){
        console.log(`I am static method from Human, key is ${Human.key}`);
    }
}

const Bob =new Human(12,178,`Bob`);
Bob.display();
Bob.age=24;
console.log(Bob.age)
Human.introduce();

class Animal{
    constructor(){

    }

}
class Cat extends Animal{
    constructor(){
        super();
    }
}
const cat=new Cat();
//callback(function object)
Big(apple)
function Big(callback){
    console.log(`big`);
    callback();
}
function apple(){
    console.log(`apple`);

}
//asynchronous code

setTimeout(()=> console.log('task1'),3000);
console.log('task2');
console.log('task3');

function func1(callback){
    setTimeout(()=> {console.log('order1');
                    callback();},3000);
}

func1(()=>{
    console.log(`order2`);
    console.log(`order3`);
    console.log(`order4`);
})
//promise
function collectgarbage(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const doit=false;
            if (doit){
                resolve(`you collect the garbage`);
            }else{
                reject(`you didn't collect the garbage`);
            }
            
        },3500);
    })
}
function collecttheleft(){
    return new Promise((resolve,reject)=>{
        //asynchronous code
        setTimeout(()=>{
            const doit=true;
            if (doit){
                resolve(`you collect the left`);
            }else{
                reject(`you didn't collect the left`);
            }
        },2500);
    })
}
function takeouttrash(){
    return new Promise((resolve,refuse)=>{
        setTimeout(()=>{
            const doit=true;
            if (doit){
                resolve(`you take out the trash`);
            }else{
                refuse(`you didn't take out the trash`);
            }
        },1000);
    })
}
collectgarbage().then(value=>{console.log(value);return collecttheleft()})
                .then(value=>{console.log(value);return takeouttrash()})
                .then(value=>{console.log(value);console.log(`you finished all the task`)})
                .catch(error=>console.error(error));
/* async: make a function return a promise
   await: make an async function wait for a promise
*/
async function alltask(){
    try{
        const result1=await collectgarbage();
        console.log(result1);
        const result2=await collecttheleft();
        console.log(result2);
        const result3=await takeouttrash();
        console.log(result3);
    }catch(e){
        console.error(e);
    }
    
}
alltask();
//fetch a json(javascript object notation) file
fetch(`Car.json`).then(response=>response.json())
                 .then(o=>console.log(o) ).catch(e=>console.error(e));