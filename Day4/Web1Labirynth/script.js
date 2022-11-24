
const m='m';
const p='p';
const b='b';
const f="f";

var xperso=1;
var yperso=1;

var timing = 0

var laby = [[m,m,m,m,m,m,m,m,m,m,m,m,m],
            [m,p,b,m,m,m,b,m,m,m,b,m,m],
            [m,b,m,m,b,b,b,b,b,m,b,m,m],
            [m,b,m,m,b,m,m,m,b,b,b,b,m],
            [m,b,m,m,b,m,f,m,m,m,m,b,m],
            [m,b,m,m,b,m,b,m,m,b,m,b,m],
            [m,b,m,m,b,m,b,m,m,b,m,b,m],
            [m,b,b,b,b,m,b,m,m,b,m,b,m],
            [m,m,b,b,m,m,b,m,b,b,b,b,m],
            [m,m,m,m,m,b,b,m,b,m,m,b,m],
            [m,b,b,b,b,b,m,m,b,m,b,b,m],
            [m,b,m,m,m,m,m,m,m,m,b,b,m],
            [m,b,b,b,b,b,b,b,b,b,b,m,m],
            [m,m,m,m,m,m,m,m,m,m,m,m,m],
            ];

ny = laby.length
nx = laby[0].length

function afficheLaby(){
    var leLaby=document.getElementById("laby");
    insertion="<table>";
    for(i=0;i<ny;i++){
        insertion+="<tr>";
        for(j=0;j<nx;j++){
            insertion+=`<td><button onclick="souris(${i},${j})"><img src='Assets/`;
            switch(laby[i][j]){
                case m:
                    insertion+="stonewall";
                    break;
                case p:
                    insertion+="Heros.png' style='background-image:Assets/Ground";
                    break;
                case b:
                    insertion+="Ground";
                    break;
                case f:
                    insertion+="Trophy";
                    break;
            }
            insertion+=".png'></button></td>";
        }
        insertion+="</tr>";
    }  
    insertion+="</table>";
    leLaby.innerHTML=insertion;
}

function possible(i, j, laby){
    if(laby[j][i] == b){
        return true
    }else if(laby[j][i] == f){
        win()
    }else{
        return false
    }
}

function win(){
    var corps=document.getElementById("result")
    stringd = "You won<br>you've taken "+timing+" seconds"
    console.log(stringd)
    corps.innerHTML = stringd
}

function move(i, j, laby, xperso, yperso){
    if(possible(i, j, laby)){
        laby[yperso][xperso] = b;
        window['xperso'] = i;
        window['yperso'] = j;
        laby[j][i] = p;
        afficheLaby();
    }
    
}

function up(){
    move(xperso, (yperso-1), laby, xperso, yperso)
}

function down(){
    move(xperso, (yperso+1), laby, xperso, yperso)
}

function right(){
    move((xperso+1), yperso, laby, xperso, yperso)
}

function left(){
    move((xperso-1), yperso, laby, xperso, yperso)
}

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode == 81) {
        left();
    }
    if (event.isComposing || event.keyCode == 83) {
        down();
    }
    if (event.isComposing || event.keyCode == 68) {
        right();
    }
    if (event.isComposing || event.keyCode == 90) {
        up();
    }
});

function timer() {
    timing += 1;
    setTimeout(timer, 1000);
}

function souris(i, j){
    if((j == (xperso + 1)||j == (xperso - 1)||j == xperso)&&(i == (yperso + 1)||i == (yperso - 1)||i == yperso)){
        move(j, i, laby, xperso, yperso)
    }
}