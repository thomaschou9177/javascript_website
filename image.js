const button=document.getElementById(`button`);
const image=document.getElementById(`image`);
console.log(button);
console.log(image);
button.addEventListener("click", event=>{
    if (image.style.visibility===`visible`){
        image.style.visibility=`hidden`;
        button.textContent=`show`;    
    }else{
        image.style.visibility=`visible`;
        button.textContent=`hide`;
    }
});