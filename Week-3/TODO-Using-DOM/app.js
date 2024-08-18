let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click" , function (){
    let item = document.createElement("Li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value ="";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    
});

ul.addEventListener("click" , function (event){
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});