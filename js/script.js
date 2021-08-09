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