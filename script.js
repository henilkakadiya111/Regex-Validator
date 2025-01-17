// const password=document.querySelector('#password')
// const charc=document.querySelector('.charc');
// const num=document.querySelector('.num');
// const upp=document.querySelector('.upp');
// const low=document.querySelector('.low');
// const spa=document.querySelector('.spa');
// const spe=document.querySelector('.spe');
// console.log(password.value);
// password.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     let str=e.target.value;
//     console.log(str)
//     let regchar=/.{8,}/
//     if(str.split('').length>=8){
//         charc.classList.add('match');
//     }else{
//         charc.classList.remove('match');
//     }
//     if(str.match(/\d+/)!=null){
//        num.classList.add('match');
//     }else{
//         num.classList.remove('match');
//     }
    
//     if(str.match(/[A-Z]/)!=null){
//       upp.classList.add('match');
//     }else{
//       upp.classList.remove('match');
//     }
//     if(str.match(/[a-z]/)!=null){
//        low.classList.add('match');
//     }else{
//         low.classList.remove('match');
//     }
//     if(str.match(/[!@#$%^&*]/)!=null){
//        spe.classList.add('match');
//     }else{
//         spe.classList.remove('match');
//     }
//     if(str.match(/[ ]/)==null){
//        spa.classList.add('match');
//     }else{
//         spa.classList.remove('match');
//     }

// })
const str="kjbjhklhk7878lh"
const regex="/\d+/"


//------------------------------------  my code is uppar   ----------------------------------------------//


const input=document.querySelector('#password')
// const chars=document.querySelector('[data-char]')
// const num=document.querySelector('[data-num]')
const list=document.querySelectorAll('ul li[data-pattern]')

const mobilenumber=document.querySelector("#mobile-number");

// const pattern={
//     char:new RegExp(chars.dataset.char),
//     num:new RegExp(num.dataset.num)           
// }
input.addEventListener('input',(e)=>{
    let str=e.target.value
    list.forEach((listelement) => {
        console.log(listelement);
        console.log(listelement.dataset.pattern);
        if(new RegExp(listelement.dataset.pattern).test(str)){
            listelement.classList.add('match');
        }else{
            listelement.classList.remove('match')
        }
    });
})

mobilenumber.addEventListener("keypress",(e)=>{
    console.log(e.key)
    if(/\d/.test(e.key)==false){
        e.preventDefault();
    }
})





