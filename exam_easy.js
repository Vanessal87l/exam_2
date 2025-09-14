///1
let p_1=document.getElementById("p_1");
let btn_1=document.getElementById("btn_1");

btn_1.addEventListener("click",()=>{
    p_1.textContent="salom";
})


////2
let ul_1=document.getElementById("ul_1");
let li=document.createElement("li");
li.textContent=prompt("li listga element qowin->");
ul_1.appendChild(li);


///3
let click=document.getElementById("click")
let p_uzunligi=document.getElementById("p_uzunligi");

click.addEventListener("click",()=>{
    let textInput_1 = document.getElementById("textInput_1");
    console.log(textInput_1.value.length);
    p_uzunligi.textContent="uzunligi-->"+textInput_1.value.length;
});



/////4

let but_dop = document.getElementById("but_dop_1");
let h2_dop = document.getElementById("h2-dop");
let counter = document.getElementById("counter")
let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
counter.textContent = count;

but_dop.addEventListener("click", () => {
    count += 1
    counter.textContent = count;
    localStorage.setItem('count', count)
});



