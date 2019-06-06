

//variable decoration
const iMImmutable = 0.13;
let favFood = `steak`;

//IIFE
(function(){
    var myScopedVar = "Bob";
})();

if(true){
    let myScopedVar = "Bob";
}

//Arrow functions
function Person(){
    var that = this;
    this.age = 0;

    setInterval(function growUp(){this.age++;
        console.log(that.age);
    },1000);
}
let peep = new Person();

//Arrow funFUNFUNction
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    },1000);
}

//Arrow function syntaxes
const multiParams = (param1,param2) =>{
    return param1 + param2;
}

const oneParam = param1 => {
    return param1;
}

const returnOneParam = param1 => param1;

const noParams = ()=>{
                    return`Hi`;
                }

const greeting = () => `Hi`;

//IIFE the not so dirty way
(() =>{
    return `Hi`;
})();

//Destructuring
//Arrays
const [a,b,c] = [1,2,3];
console.log(a,b,c);

//Objects
const Student = {
    name : `Alay`,
    id: 200390250,
    age: 23
};

({
    name,
    id,
    age
} = Student);

console.log(name,id,age);

class Superhero{
    constructor (secretID,name,origin){
        this.secretID = secretID;
        this.name = name;
        this.origin =origin;
    }
    originStory(){
        console.log(`${this.secretID} is from ${this.origin}`);
    }
}

class Person extends Superhero {}