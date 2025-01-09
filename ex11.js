alert("Verificador de ordem crescente:");

let n = prompt("Digite a quantidade de números que serão inseridos:");
while (isNaN(n) || n < 2) {
    n = parseInt(prompt("Quantidade insuficiente. Digite um valor válido:"));
    }
let lista = [];

for (let i = 0; i < n; i++) {
    let numero = prompt(`Digite o elemento ${i+1}:`);
    while (isNaN(numero)) {
        numero = parseInt(prompt("Elemento inválido. Digite um valor válido:"));
    }
    lista.push(numero);
}
let contConsec = 0;
for (let i = 0; i < n-1; i++) {
    if (lista[i] < lista[i+1])
        contConsec++;
}
console.log(`O total de números que estão em ordem crescente é de ${contConsec}`);
alert(`O total de números que estão em ordem crescente é de ${contConsec}`);