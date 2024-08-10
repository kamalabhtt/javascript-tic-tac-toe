let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");
let button= document.getElementById("reset-btn");
let paragraph= document.getElementById("para");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector("msg-container");
let msg = document.querySelector("#msg");

let turn = true; //playerX, playerO

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
msg.innerText = "congratulations, winner is ${winner} ";
msgcontainer.classList.remove("hide");
}
button.addEventListener('click',()=>{
boxes.forEach((box)=>{
    box.textContent="";
  
    paragraph.textContent="";
    box.disabled=false;
})

})
const checkWinner = () => {
    for (const pattern of winpatterns) {
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
          
              paragraph.textContent="winner"
            console.log("winner");
            showWinner(pos1val);
        }
    }
};
