let hscore = 0
let gscore = 0
let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")

function addOneHome(){
    hscore += 1
    scoreHome.innerText = hscore
}

function addTwoHome(){
    hscore += 2
    scoreHome.innerText = hscore
}

function addThreeHome(){
    hscore += 3
    scoreHome.innerText = hscore
}

function addOneAway(){
    gscore += 1
    scoreAway.innerText = gscore
}

function addTwoAway(){
    gscore += 2
    scoreAway.innerText = gscore
}

function addThreeAway(){
    gscore += 3
    scoreAway.innerText = gscore
}

function resetScore(){
    gscore = 0 
    hscore = 0
    scoreHome.innerText = hscore
    scoreAway.innerText = gscore
}

