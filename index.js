// console.log('Hello','world');

//how to accept user input:
//1.easy way: window prompt
//2.professional way: html textbox

//window prompt
// let name=window.prompt("what's your name?");
// let age=window.prompt(`what's you age ?`);
// console.log(`your name is ${name} , your age is ${age}`);

//html textbox
let username;
document.getElementById('submit').onclick=function(){
    username=document.getElementById('input').value;
    console.log(`your name is ${username}`)
    document.getElementById('myh1').textContent+=username;
}


// window.alert('window pop')
// window.alert('I like hamburger')

document.getElementById('myh1').textContent='Welcome ';
// document.getElementById('myp').textContent='I like pizza';
//This is a comment
/*
Hi
*/ 