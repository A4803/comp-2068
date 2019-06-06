function sayHi (name){
    console.log(`Hello ${name}!`);
}

//Block code. Each line will happen synchronously
sayHi(`Alay`);
sayHi(`Ravi`);
sayHi(`Jay`);

//Non-blocking code. Each line will happen asynchronously
setInterval(sayHi,2500,`Miachel`);
setInterval(sayHi,1000,`Yug`);

sayHi(`Darryl`);
sayHi(`Ilia`);