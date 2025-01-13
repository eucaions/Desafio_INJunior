alert("Sequência de Fibonacci. Digite o número de termos que ele deseja ver da sequência.");
let n = parseInt(prompt("Digite um número inteiro:"));
while (isNaN(n) || n < 0) {
    alert("Número inválido. Digite novamente:");
    n = parseInt(prompt("Digite um número inteiro:"));
}

let vet = [];

function fibonacci(valor) {
    if (valor === 0)
         return 0;
    if (valor === 1) 
        return 1;
    return fibonacci(valor-1) + fibonacci(valor-2);
}

for (let i = 0; i < n; i++) {
    vet.push(fibonacci(i));
}


alert(`A sequência de fibonacci é ${vet}`);
console.log(`A sequência de fibonacci é ${vet}`);