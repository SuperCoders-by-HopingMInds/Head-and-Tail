

let btns = document.querySelectorAll('button');

let score_box = document.querySelector('.score');



for(let t of btns){
     t.addEventListener("click" , toss)
}

let score_user = 0 , score_computer = 0
function toss(event){
    let user_selection = event.target.innerText
    // internal toss
    let choices = ["head" , "tail"] 
    let random_index = parseInt(Math.random() * choices.length)
    let random_choice = choices[random_index]
    if(user_selection.toLowerCase() === random_choice.toLowerCase()){
        console.log("User won", user_selection , random_choice)
        score_user++
        score_box.innerText = `User Score : ${score_user} Computer Score : ${score_computer}`
    }
    else{
        console.log("Computer  Won", user_selection , random_choice)
        score_computer++
        score_box.innerText = `User Score : ${score_user} Computer Score : ${score_computer}`
    }
}