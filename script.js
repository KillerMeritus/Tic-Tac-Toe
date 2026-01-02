let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")

let turnO= true; //playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach(function(box) {
    box.addEventListener("click", function(){

        if(turnO){ //player
            box.innerText = "O"
            turnO = false;
            
        } else{ 
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
        box.disabled = true;

        
    });
});

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1val =boxes[pattern[0]].innerText
        let pos2val =boxes[pattern[1]].innerText
        let pos3val =boxes[pattern[2]].innerText


        if(pos1val != "",pos2val != "",pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                if(turnO === true){
                    alert("X won the Match");
                }else{
                    alert("O won the match" );
                }
                location.reload();
        }

    }     
}

}



resetBtn.addEventListener("click",function(){
    boxes.forEach(function(box) {
        box.innerText = "";
        box.disabled = false;
    })
})

let game = document.querySelectorAll('.box');

console.log(game);