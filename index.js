let val = document.querySelectorAll(".btn");
let message = document.querySelector(".msg-container");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new-btn");
let msg1 = document.querySelector(".msg-1");
let msg2 = document.querySelector(".msg-2");

let count = 0;
let countX = 0;
let countY = 0;

let playerO=true;
const winner =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

val.forEach((btn) =>{
     btn.addEventListener("click",()=>{
        if(playerO)
        {
            btn.innerText="O";
            playerO=false;
            btn.classList.remove("color2");
            btn.classList.add("color");
    
        }
        else{
            btn.innerText="X";
            playerO=true;
            btn.classList.remove("color");
            btn.classList.add("color2");

            
        }
        btn.disabled = true;
        count++;
        check();
     });
});

/*for cheecking the conditon of winner*/
function check()
{
    for(let win of winner){

        let player1 =  val[win[0]].innerText;
        let player2 =  val[win[1]].innerText;
        let player3 =  val[win[2]].innerText;

        if(player1 !="" && player2 !="" && player3 !="")
        {
            if(player1 == player2 && player2==player3 )
            {

               showWinner(player1);
            }
            
        }

        if(count==9)
        {
            noneWinner();   
        }
         
    }
    }

/*to print the winner and points of X and O*/
    const showWinner = (winner)=>{            
    
        message.innerText='Winner is '+ winner;
        if(winner=='X')
        {
            countX++;
            
            msg1.innerText = "X : " +countX;
            msg2.innerText = "O : " +countY;
        }
        else{
            countY++;
            msg1.innerText = "X : " +countX;
            msg2.innerText = "O : " +countY;
        }
        disableButton();
        newbtn.classList.remove("hide");
                                                      
    }
/* Function for draw */
    const noneWinner =()=>
        {
            message.innerText="Game Draw No one Is Winner";
            newbtn.classList.remove("hide");
            count=0;
        };

  /*For enable and disable the button */      
const disableButton = ()=>
{
    for(values of val){
        values.disabled=true;
    }
}

const enableButton = ()=>
    {
        for(values of val){
            values.disabled=false;
           values.innerText="";
           message.innerText="";
        }
    }


    /*for reset and new button*/ 
    const resetGame = ()=>
        {  
          playerO=true;
          enableButton();
          count=0;
          newbtn.classList.add("hide");
        }
    
        const newGame = ()=>
            {  
              playerO=true;
              enableButton();
              count=0;
              newbtn.classList.add("hide");
              countX=0;
              countY=0;
              msg1.innerText = "X : " +countX;
            msg2.innerText = "O : " +countY;
              
            }

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",newGame);
