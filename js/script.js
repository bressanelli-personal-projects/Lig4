let box = [['E', ' ', ' ', ' ', ' ', ' ']
          ,[' ', 'E', 'U', 'U', 'U', 'U']
          ,[' ', ' ', 'E', ' ', ' ', ' ']
          ,['E', 'E', 'E', 'E', 'E', 'E']
          ,[' ', ' ', ' ', 'E', 'E', ' ']
          ,[' ', ' ', ' ', 'E', ' ', 'E']
          ,[' ', ' ', ' ', 'E', ' ', ' ']];

function compareLines(table, posX, posY){

    let horizontal = ""
    let vertical = ""


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

    //cria string diagonal_y
    return false
}
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

    if(actualPlayer) {
        checker.classList.remove('checkerURSS')
        checker.classList.add('checkerUSA')
        actualPlayer = false;
    } else {
        checker.classList.remove('checkerUSA');
        checker.classList.add('checkerURSS')
        actualPlayer = true;
    }
    
    return checker;
}


const gamePlay = (e) => {
    
    console.log(boxJogo.lastElementChild.id)
    const destino = document.getElementById(e.target.id);    
    destino.appendChild(makeCheckers());    
    
    
}




boxJogo.addEventListener('click', gamePlay);



/* roberto */
