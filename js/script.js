//variaveis globais
let box = [[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']
          ,[' ', ' ', ' ', ' ', ' ', ' ']];

//variaveis globais
//Kelvin
function compareLines(table, posX, posY){

    let horizontal = ""
    let vertical = ""
    let diagonal_x = ""
    let x = 0
    let y = 0


    //Trata horizontal
    horizontal = table[posX].join("")
    if(horizontal.includes("UUUU")){
        return [true, 'horizontal', 'U']
    }
    if(horizontal.includes("EEEE")){
        return [true, 'horizontal', 'E']
    }


    //Trata vertical
    for(let i = 0; i < 7; i++){
        vertical += table[i][posY]
    }
    if(vertical.includes("UUUU")){
        return [true, 'vertical', 'U']
    }
    if(vertical.includes("EEEE")){
        return [true, 'vertical', 'E']
    }


    //cria string diagonal_x
    
    
    console.log(diagonal_x)
    if(diagonal_x.includes("UUUU")){
        return [true, 'diagonal_x', 'U']
    }
    if(diagonal_x.includes("EEEE")){
        return [true, 'diagonal_x', 'E']
    }

    //cria string diagonal_y
    return false
}
//Kelvin
//Manoela
const boxJogo = document.getElementById('container');

const criarTabuleiro = () => {

    for(let i = 0; i < 7; i++){
        const coluna = document.createElement('div');
        coluna.classList.add('coluna')
        coluna.id = `${[i]}`;

        for(let j = 0; j < 6; j++){
            const celula = document.createElement('div');
            celula.classList.add('celula')
            celula.id = `${i}${[j]}`;
            coluna.appendChild(celula);
        }
        boxJogo.appendChild(coluna);
    }
}
criarTabuleiro();

/* roberto */

let actualPlayer = true;

const makeCheckers = () => {
    const checker = document.createElement('div');
    
    checker.classList.add('checker');
    checker.classList.add('checkerUSA');
    
    return checker;
}


const gamePlay = (e) => {
    
    console.log(e.target.id)
    const destino = document.getElementById(e.target.id);
    makeCheckers();
    destino.appendChild(makeCheckers());
    
}


boxJogo.addEventListener('click', gamePlay);



/* roberto */
