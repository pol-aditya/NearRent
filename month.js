let b = document.querySelector("#jan");
let c = document.querySelector("#feb");
let d = document.querySelector("#mar");             
let e = document.querySelector("#apr");
let f = document.querySelector("#may");
let g = document.querySelector("#jun"); 
let h = document.querySelector("#jul");
let i = document.querySelector("#aug");
let j = document.querySelector("#sep");
let k = document.querySelector("#oct");
let l = document.querySelector("#nov");
let m = document.querySelector("#dec"); 

console.dir(b);

b.href="https://calendar.google.com/calendar/u/0/r/settings/createcalendar";

let a = document.getElementsByClassName("selected-months");
for(let a of days)
    {
        for(let i=1;i<=28;i++)
        {
            a.innerHTML += `<label><input type="checkbox"> ${i} </label>`;
        }
    }
