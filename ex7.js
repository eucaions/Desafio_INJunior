alert("Avaliador de palíndromos. Digite uma frase para verificar:");
let frase = (prompt("Digite uma frase:")).split(' ');
let palin = "";
for (let i = 0; i < (frase.length); i++) {
    palin = palin + frase[i].toLowerCase();
}

function verificarPalin(palin) {
for (let i = 0; i < (palin.length/2); i++) {
    if (palin[i] !== palin[palin.length-i-1])
        return "Não é palíndromo.";
}
return "É palíndromo.";
}
let resultado = verificarPalin(palin);
alert(`${resultado}`);