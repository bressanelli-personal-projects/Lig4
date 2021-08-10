//variaveis globais
let box = [[' ', ' ', ' ', 'U', ' ', ' ']
          ,[' ', ' ', 'U', ' ', ' ', 'U']
          ,[' ', 'U', ' ', ' ', 'U', ' ']
          ,['U', ' ', ' ', 'U', ' ', ' ']
          ,[' ', ' ', 'U', ' ', ' ', ' ']
          ,[' ', 'U', ' ', ' ', ' ', ' ']
          ,['U', ' ', ' ', ' ', ' ', ' ']];

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
    console.log(diagonal_y)
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
        coluna.classList.add('coluna');
        coluna.id = `${'coluna'}${i}`;
        boxJogo.appendChild(coluna);
    }
}
criarTabuleiro();
//Manoela

/* roberto */

let actualPlayer = true;

let startDrop = {
    '0': -500,
    '1': -400,
    '2': -310,
    '3': -220,
    '4': -130,
    '5': -40,
    '6': 5
}

const makeCheckers = (e) => {

    const destino = document.getElementById(e.target.id);
    console.log(e.target.id)
    const checker = document.createElement('div');    
    checker.classList.add('checker')   

    if(destino !== null){
        let variavel = destino.childElementCount;
        if(destino.childElementCount < 6) {
            if(actualPlayer){
            
            checker.classList.remove('urss')
            checker.classList.add('usa');                 
            // checker.style.setProperty('--positionUsa', `${startDrop[variavel]}px`)                      
            actualPlayer = false;
            destino.appendChild(checker);
        } else {
            checker.classList.remove('usa')
            checker.classList.add('urss');
            // checker.style.setProperty('--positionUrss', `${startDrop[variavel]}px`)                
            actualPlayer = true;
            destino.appendChild(checker);
        } 
        
    
    }
    } 
    console.log(checker)
    return checker;
}


// const gamePlay = (e) => {
    
//     console.log(boxJogo.lastElementChild.id)
//     const destino = document.getElementById(e.target.id);    
//     destino.appendChild(makeCheckers());    
    
    
// }




boxJogo.addEventListener('click', makeCheckers);



/* roberto */
