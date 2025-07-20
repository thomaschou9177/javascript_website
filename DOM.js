//DOM: document object model
console.log(document);
document.getElementById('h1').textContent+=' guest';
const h1=document.getElementById(`h1`); //element
console.log(h1);
h1.style.backgroundColor=`green`;
h1.style.textAlign=`center`;
const fruits=document.getElementsByClassName('fruits'); //html collection
console.log(fruits);
Array.from(fruits).forEach(fruit=> fruit.style.backgroundColor=`blue`);
const h4element=document.getElementsByTagName(`h4`); //html collection
console.log(h4element);
for(let element of h4element){
    element.style.backgroundColor=`red`;
}
const ul=document.getElementsByTagName('ul'); //html collection (cannot use foreach method)
console.log(ul);
Array.from(ul).forEach(e=> e.style.backgroundColor=`yellow`);

const firstelement=document.querySelector(`.fruits`);  //first element
console.log(firstelement);
firstelement.style.backgroundColor=`purple`;

const list=document.querySelectorAll(`li`); //nodelist (can use foreach method)
console.log(list);
list.forEach(e=> e.style.textAlign=`center`);