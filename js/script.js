//variaveis globais
let table = [[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']];

let empate = 0;

//variaveis globais
//Kelvin
function compareLines(table, posX, posY){

    let horizontal = ""
    let vertical = ""
    let diagonal_x = ""
    let diagonal_y = ""
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


    //trata diagonal_x
    x = posX+3
    y = posY+3
    for(let i = 0; i <= 8; i++){
        if(x >= 0 && y >= 0 && x<6 && y<7){
            diagonal_x += table[x][y]
            
        }
        x--
        y--
    }
    if(diagonal_x.includes("UUUU")){
        return [true, 'diagonal_x', 'U']
    }
    if(diagonal_x.includes("EEEE")){
        return [true, 'diagonal_x', 'E']
    }

    //trata diagonal_y
    x = posX+3
    y = posY-3
    for(let i = 0; i <= 8; i++){
        if(x >= 0 && y >= 0 && x<6 && y<7){
            diagonal_y += table[x][y]

        }
        x--
        y++
    }

    if(diagonal_y.includes("UUUU")){
        return [true, 'diagonal_y', 'U']
    }
    if(diagonal_y.includes("EEEE")){
        return [true, 'diagonal_y', 'E']
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

    
    //* função verifica ganhador
    const position = e.target.id
    const verifyedLines = compareLines(table, position, destino.childElementCount-1);
    if(verifyedLines[0] === true){
        
    }
    //* função verifica ganhador
    
}


boxJogo.addEventListener('click', gamePlay);



/* roberto */
