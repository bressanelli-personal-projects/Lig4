//variaveis globais
let table = [[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']];

let flag;

//variaveis globais
//Kelvin
function compareLines(table, posX, posY){
    console.log(posX)
    console.log(posY)

    let vertical = ""
    let horizontal = ""
    let diagonal_x = ""
    let diagonal_y = ""
    let x = 0
    let y = 0
    
    //Trata vertical
    vertical = table[posX].join("")
    if(vertical.includes("UUUU")){
        return [true, 'vertical', 'U']
    }
    if(vertical.includes("EEEE")){
        return [true, 'vertical', 'E']
    }


    //Trata horizontal
    for(let i = 0; i < 7; i++){
        horizontal += table[i][posY]
    }
    if(horizontal.includes("UUUU")){
        return [true, 'horizontal', 'U']
    }
    if(horizontal.includes("EEEE")){
        return [true, 'horizontal', 'E']
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
const boxJogo = document.getElementById('boxJogo');

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

let actualPlayer;

const firstPlayer = () => {
    if(Math.floor(Math.random() * 2 + 1)-1 === 0){
    actualPlayer = true;
    flag = "E"
} else {
    actualPlayer = false;
    flag = "U"
}
}

firstPlayer();

let startDropMobile = {
    '0': -250,
    '1': -210,
    '2': -170,
    '3': -130,
    '4': -100,
    '5': -50,
    '6': 5
}

let startDropDesktop = {
    '0': -300,
    '1': -245,
    '2': -190,
    '3': -135,
    '4': -80,
    '5': -25,
    '6': 5
}
 
const makeCheckers = (e) => {
 
    const destino = document.getElementById(e.target.id);
    //console.log(e.target.id)
    const checker = document.createElement('div');    
    checker.classList.add('checker') 
    
   
    if(destino !== null){
        let variavel = destino.childElementCount;
        if(destino.childElementCount < 6) {
            if(actualPlayer){            
            checker.classList.remove('urss')
            checker.classList.add('usa');                 
            checker.style.setProperty('--positionUsaMobile', `${startDropMobile[variavel]}px`)                      
            checker.style.setProperty('--positionUsaDesktop', `${startDropDesktop[variavel]}px`)                      
            actualPlayer = false;
            destino.appendChild(checker);            
        } else {
            checker.classList.remove('usa')
            checker.classList.add('urss');
            checker.style.setProperty('--positionUrssMobile', `${startDropMobile[variavel]}px`)                
            checker.style.setProperty('--positionUrssDesktop', `${startDropDesktop[variavel]}px`)                
            actualPlayer = true;
            destino.appendChild(checker);
        }        
        
    }

    // atualiza tabuleiro
    table[e.target.id[6]][destino.childElementCount-1] = flag

    if(flag === "E"){
        flag = "U"
    }else{
        flag = "E"
    }

    // condição verifica ganhador
    let idColuna = e.target.id
    let verifyedLines = compareLines(table, parseInt(idColuna[6]), destino.childElementCount-1); 
    if(verifyedLines[0] === true){
        console.log(verifyedLines[2])
        placar(verifyedLines[2]);
        condicaoVitoria(verifyedLines[2]);
        return verifyedLines
    }

    //verifica empate
    let empate = 0
    for(let i = 0; i < 7; i++){
        let coluna = document.getElementById(`coluna${i}`)
        if(coluna.childElementCount > 5){
            empate++
        }
    }
    if(empate === 7){
        condicaoVitoria('empate');
        return 'empate'
    }
    
    nextGamer(actualPlayer); 
    }     
}

const nextGamer = () => {
    const next = document.getElementById('nextPlayer');
    
    if(actualPlayer) {
        next.classList.remove('flagUrss');
        next.classList.add('flagUsa');    
    
    } else {
        next.classList.remove('flagUsa');
        next.classList.add('flagUrss');
    }
}
nextGamer(actualPlayer); 

boxJogo.addEventListener('click', makeCheckers);

/* roberto */


//MANOELA

const modalUSA = document.querySelector('.modalUSA');
const modalURSS = document.querySelector('.modalURSS');
const modalEmpate = document.querySelector('.modal__empate');

const condicaoVitoria = (value) => {
    
    setTimeout(() => {
        if(value === 'E'){
            modalUSA.classList.remove('hidden');
        }
        
        if(value === 'U'){
            modalURSS.classList.remove('hidden');
        }
        
        if(value === 'empate'){
            modalEmpate.classList.remove('hidden');
        }
    }, 1500);
    boxJogo.removeEventListener('click', makeCheckers);
};

const btnModalClose = document.getElementById('container');
const modalClose = (event) => {
    const idButton = event.target.id;
    
    if(idButton === 'btn__one'){
        modalUSA.classList.add('hidden');
    }
    
    if(idButton === 'btn__two'){
        modalURSS.classList.add('hidden');
    }
    
    if(idButton === 'btn__three'){
       modalEmpate.classList.add('hidden');
    } 
};
btnModalClose.addEventListener('click', modalClose);

let countOne = 0;
let countTwo = 0;
const placar = (value) => {
    let pointsPlayerOne = document.querySelector('#jogador__one');
    let pointsPlayerTwo = document.querySelector('#jogador__two');

    if(value === 'E'){
        countOne++
        pointsPlayerOne.innerText = `${'USA'}: ${countOne}`
    }

    if(value === 'U'){
        countTwo++
        pointsPlayerTwo.innerText = `${'URSS'}: ${countTwo}`
    }
};

const btnResetJogo = document.getElementById("reset__jogo");
const resetJogo = () => {
    table = [[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']];

    firstPlayer();
    nextGamer(actualPlayer);

    for(let i = 0; i < 7; i++){
        document.getElementById(`coluna${i}`).innerHTML = "";
    }

    boxJogo.addEventListener('click', makeCheckers);
};
btnResetJogo.addEventListener("click", resetJogo);

const btnResetPlacar = document.getElementById("reset__placar");
const resetPlacar = () => {
    countOne = 0;
    countTwo = 0;
    document.querySelector('#jogador__one').innerText = `${'USA'}: ${0}`
    document.querySelector('#jogador__two').innerText = `${'URSS'}: ${0}`
};
btnResetPlacar.addEventListener("click", resetPlacar);

//MANOELA