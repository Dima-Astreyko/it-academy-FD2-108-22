
let containerGame =  document.getElementById("container_game");
let newGame = document.getElementById("newGame");

newGame.addEventListener("click", generate);
function generate(){
    let n = document.getElementById("input").value;
    let num = n*n;
    console.log(num);
    let gameWrapper = document.createElement("div");
        gameWrapper.classList.add("gameWrapper");
        gameWrapper.style.gridTemplateColumns = `repeat(${n}, 0.2fr)`;
        gameWrapper.style.gridTemplateRows = `repeat(${n}, 0.4fr)`;

    for(let i = 0; i<num; i++){
        div = document.createElement("div");
        div.classList.add("game_item");
        gameWrapper.append(div);
    }
        containerGame.append(gameWrapper);
        console.log(gameWrapper);
    newGame.removeEventListener("click", generate);
    
}



let click = 0;
containerGame.addEventListener("click", game);
function game(event){
    click++;
    if(click % 2 == 0){
        event.target.style.backgroundColor = "blue";
        event.target.innerHTML = "X";
    }else{
        
        event.target.style.backgroundColor = "gray";
        event.target.innerHTML = "O";
    }
    
}




