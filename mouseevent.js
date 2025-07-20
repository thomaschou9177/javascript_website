//set box attribute
const box=document.getElementById(`box`);
box.style.backgroundColor=`lightgreen`;
box.style.width=`300px`;
box.style.height=`300px`;
box.style.fontSize=`4.5rem`;
box.style.fontWeight=`bold`;
box.style.display=`flex`;
box.style.alignItems=`center`;
box.style.textAlign=`center`;
box.style.position=`relative`; //make position dynamic
//set button attribute
const button=document.getElementById(`button`);
button.style.fontSize=`3rem`;
//mouse event : click,mouseover,mouseout
button.addEventListener(`click`,event=> {
    box.style.backgroundColor=`red`;
    box.textContent=`ouch 😣`
});
button.addEventListener(`mouseover`,event=> {
    box.style.backgroundColor=`yellow`;
    box.textContent=`Hi 😘`
});
button.addEventListener(`mouseout`,event=> {
    box.style.backgroundColor=`lightgreen`;
    box.textContent=`click me 😊`

});
let x=0;
let y=0;
let move_amount=20;
//keyboard event : keyup,keydown
document.addEventListener(`keydown`, event=>{
    if (event.key.startsWith(`Arrow`)){
        switch (event.key){
            case `ArrowUp`:
                y-=move_amount;
                break;
            case `ArrowDown`:
                y+=move_amount;  
                break;
            case `ArrowLeft`:
                x-=move_amount; 
                break;
            case `ArrowRight`:
                x+=move_amount;
                break; 
        }
        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
    }
})

