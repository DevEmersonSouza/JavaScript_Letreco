let letrecoDoDia = ["v", "a", "s", "c", "o"]

let matchFirstInput = "";


function matchFirst() {
    inputOnefirstMatch = document.getElementById("firstLetter").value;

    console.log(inputOnefirstMatch)

    matchFirstInput = letrecoDoDia.indexOf(inputOnefirstMatch);
    console.log(matchFirstInput)

    if (matchFirstInput === -1) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchFirstInput !== -1) {
        if (matchFirstInput === 0) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFirstInput === 1 || matchFirstInput === 2 || matchFirstInput === 3 || matchFirstInput === 4) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    if (inputOnefirstMatch === "") {
        alert("Insira uma letra na primeira casa")
        let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#ffffff";
    }
}

function matchSecond() {
    inputOneSecondMatch = document.getElementById("secondLetter").value;

    console.log(inputOneSecondMatch)
    
    matchSecondInput = letrecoDoDia.indexOf(inputOneSecondMatch);
    console.log(matchSecondInput)
    
    if (matchSecondInput === -1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    
    if (matchSecondInput !== -1) {
        if (matchSecondInput === 1) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchSecondInput === 0 || matchSecondInput === 2 || matchSecondInput === 3 || matchSecondInput === 4) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
    if (inputOneSecondMatch === "") {
        alert("Insira uma letra na segunda casa")
        let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#ffffff";
    }
}
function matchThird() {
    inputOneThirdMatch = document.getElementById("thirdLetter").value;
    
    console.log(inputOneThirdMatch)
    
    matchThirdInput = letrecoDoDia.indexOf(inputOneThirdMatch);
    console.log(matchThirdInput)
    
    if (matchThirdInput === -1) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    
    if (matchThirdInput !== -1) {
        if (matchThirdInput === 2) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchThirdInput === 0 || matchThirdInput === 1 || matchThirdInput === 3 || matchThirdInput === 4) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
    if (inputOneThirdMatch === "") {
        alert("Insira uma letra na terceira casa")
        let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#ffffff";
    }
}
function matchFourth() {
    inputOneFourthMatch = document.getElementById("fourthLetter").value;
    
    console.log(inputOneFourthMatch)
    
    matchFourthInput = letrecoDoDia.indexOf(inputOneFourthMatch);
    console.log(matchFourthInput)

    if (matchFourthInput === -1) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    
    if (matchFourthInput !== -1) {
        if (matchFourthInput === 3) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFourthInput === 0 || matchFourthInput === 1 || matchFourthInput === 2 || matchFourthInput === 4) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
    if (inputOneFourthMatch === "") {
        alert("Insira uma letra na quarta casa")
        let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#ffffff";
    }
}
function matchFifth() {
    inputOneFifthhMatch = document.getElementById("fifthLetter").value;
    
    console.log(inputOneFifthhMatch)
    
    matchFifthInput = letrecoDoDia.indexOf(inputOneFifthhMatch);
    console.log(matchFifthInput)

    if (matchFifthInput === -1) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    
    if (matchFifthInput !== -1) {
        if (matchFifthInput === 4) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFifthInput === 0 || matchFifthInput === 1 || matchFifthInput === 2 || matchFifthInput === 3) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
    if (inputOneFourthMatch === "") {
        alert("Insira uma letra na quinta casa")
        let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#ffffff";
    }
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        let btn = document.getElementById("submitButton");
      
      btn.click();
    
    }
  });

  document.addEventListener("keypress", function(e) {
    if(e.key === 'Backspace') {
    
        let btn = document.getElementById("backspaceButton");
      
      btn.click();
      fifthLetter.onfocus()
      
    
    }
  });

function tabTwo(){
    secondLetter.focus()
}
function tabTree(){
    thirdLetter.focus()
}
function tabFour(){
    fourthLetter.focus()
}
function tabFive(){
    fifthLetter.focus()
}
function tabSix(){
    fifthLetter.focus()
}
