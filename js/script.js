// variaveis globais ===============

let table = [[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']];

let flag;
let countOne = 0;
let countTwo = 0;
let actualPlayer;

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

const modalUSA = document.querySelector('.modalUSA');
const modalURSS = document.querySelector('.modalURSS')
const boxJogo = document.getElementById('boxJogo');
const modalEmpate = document.querySelector('.modal__empate');
const btnModalClose = document.getElementById('container');
const btnResetJogo = document.getElementById("reset__jogo");
const btnResetPlacar = document.getElementById("reset__placar");
const audioJogada = new Audio("sound/sound-click.mp3");
const audioWin = new Audio("sound/sound-win.mp3");
const audioReset = new Audio("sound/sound-reset.mp3");



// funções =========================

const criarTabuleiro = () => {

    for(let i = 0; i < 7; i++){
        const coluna = document.createElement('div');
        coluna.classList.add('coluna');
        coluna.id = `${'coluna'}${i}`;

        boxJogo.appendChild(coluna);
    };
};

const firstPlayer = () => {
    if(Math.floor(Math.random() * 2 + 1)-1 === 0){
    actualPlayer = true;
    flag = "E";
} else {
    actualPlayer = false;
    flag = "U";
};
};

const gamePlay = (e) => {
    audioJogada.play();
    const destino = document.getElementById(e.target.id);    
    const checker = document.createElement('div');    
    checker.classList.add('checker');    
   
    if(destino !== null){
        let variavel = destino.childElementCount;
        if(destino.childElementCount < 6) {
            if(actualPlayer){            
            checker.classList.remove('urss');
            checker.classList.add('usa');                 
            checker.style.setProperty('--positionUsaMobile', `${startDropMobile[variavel]}px`);                     
            checker.style.setProperty('--positionUsaDesktop', `${startDropDesktop[variavel]}px`);                      
            actualPlayer = false;
            destino.appendChild(checker);            
        } else {
            checker.classList.remove('usa');
            checker.classList.add('urss');
            checker.style.setProperty('--positionUrssMobile', `${startDropMobile[variavel]}px`);                
            checker.style.setProperty('--positionUrssDesktop', `${startDropDesktop[variavel]}px`);                
            actualPlayer = true;
            destino.appendChild(checker);
        };        
        
    };

    // atualiza tabuleiro
    if(table[e.target.id[6]][5] === " "){
        table[e.target.id[6]][destino.childElementCount-1] = flag;
        if(flag === "E"){
            flag = "U";
        }else{
            flag = "E";
        };
    };

    // condição verifica ganhador
    let idColuna = e.target.id;
    let verifyedLines = compareLines(table, parseInt(idColuna[6]), destino.childElementCount-1); 
    if(verifyedLines[0] === true){
        placar(verifyedLines[2]);
        condicaoVitoria(verifyedLines[2]);
        return verifyedLines;
    };

    // condição verifica empate
    let empate = 0
    for(let i = 0; i < 7; i++){
        let coluna = document.getElementById(`coluna${i}`);
        if(coluna.childElementCount > 5){
            empate++;
        };
    };
    if(empate === 7){
        condicaoVitoria('empate');
        return 'empate';
    };
    
    nextGamer(actualPlayer); 
    };     
};

const nextGamer = () => {
    const next = document.getElementById('nextPlayer');
    
    if(actualPlayer) {
        next.classList.remove('flagUrss');
        next.classList.add('flagUsa');    
    
    } else {
        next.classList.remove('flagUsa');
        next.classList.add('flagUrss');
    };
};

const condicaoVitoria = (value) => {
    
    setTimeout(() => {
        audioWin.play();
        if(value === 'E'){
            modalUSA.classList.remove('hidden');
        };
        
        if(value === 'U'){
            modalURSS.classList.remove('hidden');
        };
        
        if(value === 'empate'){
            modalEmpate.classList.remove('hidden');
        };
    }, 1500);

    boxJogo.removeEventListener('click', gamePlay);
};

const modalClose = (event) => {
    const idButton = event.target.id;
    
    if(idButton === 'btn__one'){
        modalUSA.classList.add('hidden');
    };
    
    if(idButton === 'btn__two'){
        modalURSS.classList.add('hidden');
    };
    
    if(idButton === 'btn__three'){
       modalEmpate.classList.add('hidden');
    };
};

const placar = (value) => {
    let pointsPlayerOne = document.querySelector('#jogador__one');
    let pointsPlayerTwo = document.querySelector('#jogador__two');

    setTimeout(() => {
        if(value === 'E'){
            countOne++;
            pointsPlayerOne.innerText = `${'USA'}: ${countOne}`;
        };
    
        if(value === 'U'){
            countTwo++;
            pointsPlayerTwo.innerText = `${'URSS'}: ${countTwo}`;
        };
    }, 1500); 
};

const resetJogo = () => {
    audioReset.play();
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
    };

    boxJogo.addEventListener('click', gamePlay);
};

const resetPlacar = () => {
    audioReset.play();
    countOne = 0;
    countTwo = 0;
    document.querySelector('#jogador__one').innerText = `${'USA'}: ${0}`;
    document.querySelector('#jogador__two').innerText = `${'URSS'}: ${0}`;
};

const compareLines = (table, posX, posY) => {

    let linha = "";
    let x = 0;
    let y = 0;
    
    //Trata vertical
    linha = table[posX].join("");
    if(linha.includes("UUUU")){
        return [true, 'vertical', 'U'];
    }
    if(linha.includes("EEEE")){
        return [true, 'vertical', 'E'];
    };

    //Trata horizontal
    linha = "";
    for(let i = 0; i < 7; i++){
        linha += table[i][posY];
    };
    if(linha.includes("UUUU")){
        return [true, 'horizontal', 'U'];
    };
    if(linha.includes("EEEE")){
        return [true, 'horizontal', 'E'];
    };

    //trata diagonal_x
    linha = "";
    x = posX + 3;
    y = posY - 3;
    for(let i = 0; i < 8; i++){
        if(x >= 0 && y >= 0 && x<7 && y<6){
            linha += table[x][y];
        };
        x--;
        y++;
    };
    if(linha.includes("UUUU")){
        return [true, 'diagonal_x', 'U'];
    };
    if(linha.includes("EEEE")){
        return [true, 'diagonal_x', 'E'];
    };

    //trata diagonal_y
    linha = "";
    x = posX - 3;
    y = posY - 3;
    for(let i = 0; i <= 8; i++){
        if(x >= 0 && y >= 0 && x<7 && y<6){
            linha += table[x][y];
        };
        x++;
        y++;
    }
    if(linha.includes("UUUU")){
        return [true, 'diagonal_y', 'U'];
    };
    if(linha.includes("EEEE")){
        return [true, 'diagonal_y', 'E'];
    };

    return false
};



// calls das funções ==============

criarTabuleiro();

firstPlayer();

nextGamer(); 



// handlers de clique =============

boxJogo.addEventListener('click', gamePlay);

btnModalClose.addEventListener('click', modalClose);

btnResetJogo.addEventListener("click", resetJogo);

btnResetPlacar.addEventListener("click", resetPlacar);