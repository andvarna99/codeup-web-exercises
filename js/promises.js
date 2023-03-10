"use strict";
(async function (){
function gitUserCommitDate(username){
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url,{
        headers:{
            'Authorization': 'token' + GITHUB_API_KEY
        }
    }).then(function(response){
            return response.json();
        }).then(function(data){
            return data.filter(function(event) {
                return event.type === "PushEvent";
            })[0].created_at.substring(0,10);
        });
}
const lastCommitDate = await gitUserCommitDate("andvarna99");
console.log(lastCommitDate);
})();

//walkthrough
// (async function (){
//     function getLastCommitDate(userName,apiKey){
//         const url = `https://api.github.com/users/${userName}/events/public`
//         return fetch(url, {
//                 headers:{
//                     'Authorization': `token ${apiKey}`
//                 }
//             }).then(function(response){
//             return response.json();
//         }).then(function(data){
//             //dig through the events and find the most recent push event
//             for (let i = 0; i < data.length; i++) {
//                 if(data[i].type === "PushEvent"){
//                     return data[i].created_at;
//                 }
//             }
//             // return data[0].created_at; doesn't work, not consistent
//         });
//     }
//     const lastCommitDate = await getLastCommitDate("madmarcos-codeup", GITHUB_API_KEY);
//     // console.log(lastCommitDate);
//
// })();



function wait(num){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve(num);
        },num)
    });
}
wait(5000).then((resolveValue) => console.log(`You'll see this after ${resolveValue / 1000} seconds`));

//debugging api calls
//go into network section of inspect tools, dig into requests and responses
//postman