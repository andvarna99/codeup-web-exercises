"use strict";

function gitUserCommitDate(username){
    let url = "https://api.github.com/users/andvarna99/events/public";
    return fetch(url,{
        headers:{
            'Authorization': 'token' + GITHUB_API_KEY
        }})
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data[0].created_at.substring(0,10));
        });
}
gitUserCommitDate();

function wait(num){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve();
        },num)
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
