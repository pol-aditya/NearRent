let fromDate=document.querySelector("#fromDate");
let toDate=document.querySelector("#toDate");

fromDate.addEventListener("click",()=>{
    fromDate.showPicker();
});

fromDate.addEventListener("change",()=>{
    toDate.min=fromDate.value;
})

toDate.addEventListener("click",()=>{
    toDate.showPicker();
});