const $ball = document.getElementsByClassName("ball")
const $team1score = document.getElementById("score-team1")
const $team1wickets = document.getElementById("wickets-team1")
const $team2score = document.getElementById("score-team2")
const $team2wickets = document.getElementById("wickets-team2")
const resetbutton = document.getElementById("reset")
const strikebutton = document.getElementById("strike")

var team1wickets = 0
var team2wickets = 0

var team1score = 0
var team2score = 0

var ballsfaced = 0
var turn = 1

const possibleOutcomes = [0,1,2,3,4,5,6,"W"]

resetbutton.onclick = () =>{
    window.location.reload();
}

strikebutton.onclick  = () => {
    strike.play()
    ballsfaced++;
    if (turn == 1){
        const score = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
        console.log(score)
        if (score === "W"){
            team1wickets++
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score 
            $team1wickets.innerText = team1wickets
            
        }
        else{
            team1score += score
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score 
            $team1score.textContent = team1score
        }
        if(ballsfaced ==6|| team1wickets ==2){
            turn = 2
            ballsfaced = 0
        }

    }

    if (turn == 2){
        const score = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
        if (score === "W"){
            team2wickets++
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score 
            $team2wickets.innerText = team2wickets
            
        }
        else{
            team2score += score
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score 
            $team2score.textContent = team2score
        }
        if(ballsfaced ==6|| team2wickets ==2 || team2score > team1score){
            turn=3
            finished()
        }
    }
}

const strike = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
const cheer = new Audio("http://bit.ly/so-crowd-cheer")

function finished () {
    cheer.play();
    if (team1score > team2score) alert("India Wins");
    if (team2score > team1score) alert("Pakistan Wins");
    if (team1score == team2score) alert("Draw Match");
}
 


    

