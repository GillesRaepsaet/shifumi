const btn = document.querySelectorAll('button')

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',() =>{
        const player = btn[i].innerHTML
        const IA = btn[Math.floor(Math.random() *  btn.length)].innerHTML
        let  result = ""

        if(player === IA){
            result = "equality"
        }else if((player === "scissors" && IA === "rock") || (player === "rock" && IA === "sheet") || (player === "sheet" && IA === "scissors")){
            result = "Lost"
        }else{
            result = "Win"
        }
        document.getElementById("result").innerHTML = `Players : ${player} </br>  IA : ${IA} </br>  ${result}`
        //console.log(`Players : ${player} VS IA : ${IA}`)

    })
}