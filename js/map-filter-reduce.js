"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguagesOrMore = users.filter(function(user){
    return user.languages.length >= 3;
});

const emailAddress = users.map(function(user){
    return user.email;
});

const totalExperience = users.reduce(function(totalSoFar ,user){
    return (totalSoFar + user.yearsOfExperience);
},0);

const longestEmail = users.reduce(function(longestEmailSoFar, user){
    if(user.email.length >= longestEmailSoFar){
        return user.email.length;
    }else{
        return longestEmailSoFar;
    }
}, Number.NEGATIVE_INFINITY);

const userNames = users.reduce(function(names,user){
    return `${names}${user.name}, `;
}, "");

const userLanguages = users.reduce(function(languages,user){
    return `${languages}${user.languages},`;
},"");