const https = require('https');

const getInsult = function (){
    const url = `https://insult.mattbas.org/api/insult`;

    return new Promise(function (resolve,reject){
        const req = https.get(url,function(client){
            client.on(`data`,function (data){
                resolve(data.toString());
            });
        });

        req.on(`error`,function(error){
            reject(error);
        });

    });
}

getInsult()
.then(function (insult){
    console.log(insult);
})
.catch(function (error){
    console.log(error);
});