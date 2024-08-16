// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })


const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}