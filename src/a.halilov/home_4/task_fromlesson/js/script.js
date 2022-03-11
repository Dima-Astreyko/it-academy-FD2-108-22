let btn = document.getElementsByTagName("button");
let container = document.getElementById("message");

function not(message, color){
    let div = document.createElement("div");
    div.textContent = message;
    container.append(div);
    div.classList.add("message_item");
    div.style.backgroundColor = color;
    
    setTimeout(()=>{
        div.remove();
        btn[0].style.backgroundColor = "white";
        btn[1].style.backgroundColor = "white";
        btn[2].style.backgroundColor = "white";

    }, 3000);

}



btn[0].addEventListener("click", function(){  /* ПРи наведении на кнопку */
    not("Все плохо", "red");
    btn[0].style.backgroundColor = "red";
});

btn[1].addEventListener("click", function(){  /* ПРи наведении на кнопку */
    not("успешно", "green");
    btn[1].style.backgroundColor = "green";

});

btn[2].addEventListener("click", function(){  /* ПРи наведении на кнопку */
    not("Просто инфа", "yellow"); 
    btn[2].style.backgroundColor = "yellow";
});