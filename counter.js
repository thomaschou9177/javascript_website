let count=0;
document.getElementById(`h1`).textContent=count;
document.getElementById('increase').onclick=function(){
    count++;
    document.getElementById(`h1`).textContent=count;
}
document.getElementById('reset').onclick=function(){
    count=0;
    document.getElementById(`h1`).textContent=count;
}
document.getElementById('decrease').onclick=function(){
    count--;
    document.getElementById(`h1`).textContent=count;
}
