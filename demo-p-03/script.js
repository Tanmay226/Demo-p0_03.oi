const currency_btn =document.querySelector(".currency-btn");
const currency_list = document.querySelector(".currency-list");
const language_btn = document.querySelector(".language-btn");
const language_list = document.querySelector(".language-list");
const account_btn = document.querySelector(".account-btn");
const account_list = document.querySelector(".account-list");






currency_btn.addEventListener("click", myfunction =()=>{
   

// alert("hello")
currency_list.classList.toggle("d-block");


});

language_btn.addEventListener("click", myfunction =()=>{
   

language_list.classList.toggle("d-block");
});
account_btn.addEventListener("click", myfunction =()=>{
   

account_list.classList.toggle("d-block");
});



// close the pop up

document.addEventListener("click", function(event){

if (!currency_list.contains(event.target) && currency_list.style.display==='block') {
    currency_list.style.display='block';
    }
})


console.log(currency_list)





// let buttons = document.querySelectorAll(".nav-c-btn");
// let showlist = document.querySelectorAll(".header-top-right ul li ul ");


// // console.log(buttons);



// buttons.forEach(button =>{

//     button.addEventListener("click", function (){

// showlist.forEach(btn => btn.classList.remove("d-block"));

// showlist.classList.add("d-block");

// console.log("click")

//     })
// })







