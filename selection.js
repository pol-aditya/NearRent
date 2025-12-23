
let selection_credentials = document.querySelector(".selection-credentials");
let inputs = document.querySelectorAll("input");

selection_credentials.addEventListener("submit", function(eve){
    eve.preventDefault();

    let neww = document.createElement("div");
    neww.classList.add("neww");


    let form = document.createElement("form");

    let inpsa = document.createElement("input");
    inpsa.type = "text";
    inpsa.placeholder = "enter period";
    inpsa.value = inputs[0].value;

    form.appendChild(inpsa);
    

    for(let i=0;i<4;i++)
    {
        let inpsb = document.createElement("input");
        inpsb.type = "text";
        inpsb.placeholder = `enter month ${i + 1}`;
        inpsb.value = inputs[1 + i].value;
        form.appendChild(inpsb);
    }

    for(let i=0;i<10;i++)
    {
        let inpsc = document.createElement("input");
        inpsc.type = "text";
        inpsc.placeholder = `enter subject name ${i + 1}`;
        inpsc.value = inputs[5 + i].value;
        form.appendChild(inpsc);
    }

    
    

    neww.appendChild(form);

    selection_credentials.appendChild(neww);

    


});
