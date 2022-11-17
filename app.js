const inc = document.getElementById('inc');

const dec = document.getElementById('dec');
const res = document.getElementById('res');
const counter = document.getElementById('counter');
console.log(inc,dec,res,counter)



inc.addEventListener('click' , ()=>{
    counter.innerHTML++;
    // count--;
})


// inc.onmouseleave = () =>{
//     counter.innerHTML=0
// }


dec.addEventListener('click', ()=>{
    counter.innerHTML--;
    // count++;
})

res.addEventListener('mouseover',() => {
    counter.innerHTML=0;
})












