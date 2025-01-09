let resposta;
function abreLista(vet) {
    let nomes = ``;
    alert("Lista de Espera da central: ")
    for (let i = 0; i < lista.length; i++) {
        nomes += `${i+1} - ${vet[i]}\n`;
 
    }
    if (nomes === ``) {
        alert("Lista vazia");
        console.log("Lista vazia");
    }
    else {
        alert(nomes);
        console.log(nomes);
    }

}

function newClient(vet) {
    vet.push(prompt("Digite o nome do cliente a ser acrescentado:"));
}

function exclui(vet) {
    if (vet.length > 0) {
        let removido = vet.shift();
        console.log(`O cliente atendido foi ${removido}`);
        alert(`O cliente atendido foi ${removido}`);
    }
    else {
        console.log("Não há clientes para serem atendidos.");
        alert("Não há clientes para serem atendidos.");
    }
}

let lista = [];

do {
    abreLista(lista);
    console.log("Menu de controle da lista de espera:");
    console.log("Digite 1 para acrescentar um novo cliente:");
    console.log("Digite 2 para atender o primeiro cliente da fila:");
    console.log("Digite 3 para encerrar o programa:");
    resposta = parseInt(prompt("Menu de controle da lista de espera:\n\nDigite 1 para acrescentar um novo cliente:\nDigite 2 para excluir o primeiro cliente da fila:\nDigite 3 para encerrar o programa:\n\nDigite o número do comando:"));
    while (isNaN(resposta)) {
        valor = parseInt(prompt("Menu de controle da lista de espera:\nDigite 1 para acrescentar um novo cliente:\nDigite 2 para excluir o primeiro cliente da fila:\nDigite 3 para encerrar o programa:\n\nNúmero inválido. Digite novamente:"));
    }
    if (resposta == 1)
        newClient(lista);
    else if (resposta == 2)
        exclui(lista);
    else if (resposta == 3)
    	console.log("Fim do programa.");
    else
        console.log("Opção inexistente.");
} while (resposta !== 3);
