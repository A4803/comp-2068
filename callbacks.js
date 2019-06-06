function farewell(name){
    console.log(`Goodbye ${name}`);
}

function greeting(name,callback){
    console.log(`Hello ${name}`);
    callback(name);
}

greeting(`Alay Navagamiya`,farewell);