let letrecoDoDia = "vasco";


function teste() {
    
    //declarando os valores
    let valor1 = document.getElementById("firstLetter").value;
    let valor2 = document.getElementById("secondLetter").value;
    let valor3 = document.getElementById("thirdLetter").value;
    let valor4 = document.getElementById("fourthLetter").value;
    let valor5 = document.getElementById("fifthLetter").value;
    let valorGeral = [valor1, valor2, valor3, valor4, valor5]
    console.log(valorGeral)
    
    //match dos valores do indexof
    let match1 = letrecoDoDia.indexOf(valor1)
    let match2 = letrecoDoDia.indexOf(valor2)
    let match3 = letrecoDoDia.indexOf(valor3)
    let match4 = letrecoDoDia.indexOf(valor4)
    let match5 = letrecoDoDia.indexOf(valor5)
    let matchGeral = [match1, match2, match3, match4, match5]
    console.log(matchGeral)
    
    //filtragem das letras erradas
    let letrasErradas = matchGeral.filter(erradas)
    
    function erradas(letras) {
        return letras === -1;
    }
    console.log(letrasErradas)

    //filtragem das letras certas
    let letrasCertas = matchGeral.filter(certas)
    
    function certas(letras) {
        return letras >= 0 && letras <= 5;
    }
    console.log(letrasCertas)
    
        if (letrasErradas === -1) {
            let um = letrasErradas.getAttribute('id');
            console.log(um)
            console.log(element)
        }
    
}

