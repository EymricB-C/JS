const X = document.getElementById('x');
const Y = document.getElementById('y');

// On récupère les références des boutons "sum", "sub", "mult", "div" et "modulo", qui ont respéctivement les ids "buttonSum", "buttonSub", "buttonMult", "buttonDiv" et "buttonModulo"
const BUTTON_SUM = document.getElementById('buttonSum');
const BUTTON_SUB = document.getElementById('buttonSub');
const BUTTON_MULT = document.getElementById('buttonMult');
const BUTTON_DIV = document.getElementById('buttonDiv');
const BUTTON_MODULO = document.getElementById('buttonModulo');

// Et on récupère les références des blocs où seront affichés le résultat et l'historique
const RESULT = document.getElementById('result');
const HISTORY = document.getElementById('history');

// On va écouter l'événement "click" de chacun de nos boutons, grâce à la méthode "addEventListener" en spécifiant quel événement on veut écouter et en donnant une fonction qui va s'éxecuter en conséquence
// La fonction anonyme donnée en argument de "addEventListener" va être éxecutée à chaque fois qu'on va cliquer sur le bouton en question
// Ici nos fonctions vont simplement récupérer le résultat du calcul fait dans la fonction déclarée plus bas et le mettre dans notre bloc pour l'afficher à l'utilisateur
// Les références "X" et "Y" sont des champs de formulaire, pour récupérer leur valeur il suffit de récupérer leur propriété "value"
// On ajout également le calcul à l'historique grâce une autre fonction "addToHistory" déclarée plus bas
BUTTON_SUM.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'SUM');
    addToHistory(X.value, Y.value, res, '+');
    RESULT.innerText = res;
})

BUTTON_SUB.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'SUB');
    addToHistory(X.value, Y.value, res, '-');
    RESULT.innerText = res;
})

BUTTON_MULT.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'MULT');
    addToHistory(X.value, Y.value, res, '*');
    RESULT.innerText = res;
})

BUTTON_DIV.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'DIV');
    addToHistory(X.value, Y.value, res, '/');
    RESULT.innerText = res;
})

BUTTON_MODULO.addEventListener('click', () => {
    let res = calcuation(X.value, Y.value, 'MODULO');
    addToHistory(X.value, Y.value, res, '%');
    RESULT.innerText = res;
})

function calcuation(x, y, operator) {
    switch(operator) {
        case 'SUM':
            return Number(x) + Number(y)
        case 'SUB':
            return Number(x) - Number(y)
        case 'MULT':
            return Number(x) * Number(y)
        case 'DIV':
            return Number(x) / Number(y)
        case 'MODULO':
            return Number(x) % Number(y)
    }
}

function addToHistory(x, y, result, operator) {
    const row = document.createElement('tr');
    const col = document.createElement('td');
    col.innerText = `${x} ${operator} ${y} = ${result}`;
    row.appendChild(col);
    HISTORY.insertAdjacentElement("afterbegin", row)
}

function newDatabase(){
    let db = "";
    let openRequest = indexedDB.open("db", 1);


    openRequest.onupgradeneeded = function () {
        db = openRequest.result;
        if (!db.objectStoreNames.contains("results")) {
            db.createObjectStore("results", { keyPath:"id" });
        }
    };

    return new Promise((resolve, reject) => {
        openRequest.onsuccess = function () {
            console.info("la connexion avec la base de donnée est effective")
            resolve(openRequest.result);
        }

        openRequest.onerror = function () {
            console.error("impossible d\'accéder à IndexedDB");
            reject(openRequest.error)
        }
    })
};

newDatabase().then((database) => {
    console.log(database);
}).catch((error) => {
    console.error(error)
});