let homeCnt = document.getElementById("home-cnt")
let guestCnt = document.getElementById("guest-cnt")
let home = document.getElementById("home")
let guest = document.getElementById("guest")
let countH = 0
let countG = 0

function updateColors(){
if (countH > countG ){
    home.style.color = '#2ECC71';
    guest.style.color = '#E74C3C';
} else if (countG > countH ) {
    home.style.color = ' #E74C3C';
    guest.style.color = '#2ECC71';
} else{
    home.style.color = '#EEEEEE';
    guest.style.color = '#EEEEEE';
}
}

function add1h() {
    countH += 1
    homeCnt.textContent = countH
    updateColors()
}
function add2h() {
    countH += 2
    homeCnt.textContent = countH
    updateColors()
}
function add3h() {
    countH += 3
    homeCnt.textContent = countH
    updateColors()
}
function add1g() {
    countG += 1
    guestCnt.textContent = countG
    updateColors()
}
function add2g() {
    countG += 2
    guestCnt.textContent = countG
    updateColors()
}
function add3g() {
    countG += 3
    guestCnt.textContent = countG
    updateColors()
}

function reset() {
    countH = 0
    countG = 0 
    homeCnt.textContent = countH
    guestCnt.textContent = countG
    updateColors()
}
