function leitura() {
    let valor = parseInt(prompt("Digite um número inteiro e positivo:"));
    while ((isNaN(valor)) || (valor < 0) || !Number.isInteger(valor)) {
        alert("Valor inválido. Digite um número válido (inteiro e positivo) para prosseguir");
        valor = parseInt(prompt("Digite um número inteiro e positivo:"));
    }
    return valor;
}

function fat(x) {
    if (x === 0)
        return 1;
     return x * fat(x-1);
}


let resposta


do {
    let n = leitura();
    let resultado = fat(n);

    alert(`O valor do fatorial de ${n} é ${resultado}`);
    console.log(resultado); 

    resposta = prompt('Deseja fazer outro cálculo? Digite S para "Sim" e N para "Não":').toUpperCase();

    while (resposta !== "S" && resposta !== "N")
            resposta = prompt('Entrada inválida. Digite S para "Sim" e N para "Não":').toUpperCase();
        

    } while (resposta === "S")

alert("Fim do programa");
