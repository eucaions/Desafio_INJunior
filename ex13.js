let jogadores = [];

function adicionarJogador(vet) {
    let nome = (prompt("Digite o nome do jogador:"));
    let idade = parseInt(prompt("Digite a idade do jogador:"));
    while (isNaN(idade) || idade < 0) {
        idade = parseInt(prompt("Idade inválida. Digite novamente:"));
    }
    let posicao = (prompt("Digite a posição do jogador:"));
    let pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));
    while (isNaN(pontuacao) || pontuacao < 0) {
        pontuacao = parseInt(prompt("Pontuação inválida. Digite novamente:"));
    }
    let jogador = {nome, idade, posicao, pontuacao};
    vet.push(jogador);
}



function buscarPorPosicao(vet, pos) {
    let lista = [];
    for (let jogador of vet) {
        if (jogador.posicao === pos)
            lista.push(jogador.nome);
    }
    return lista;
}



function listarTime(vet) {
    let timecompleto = "";
    for(let jogador of vet) {
        timecompleto += `Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}\n`;
    }
    alert("Jogadores do time:\n" + timecompleto);
    console.log("Jogadores do time:\n" + timecompleto);
}



function calcularPontuacaoMedia (vet) {
    let total = 0;
    for(let jogador of vet) {
        total = total + jogador.pontuacao;
    }
    return (total/vet.length).toFixed(2);
}



let resposta;
do {
    console.log("Menu de controle da lista de espera:");
    console.log("Digite 1 para adicionar um novo jogador:");
    console.log("Digite 2 para buscar por posição:");
    console.log("Digite 3 para listar o time:");
    console.log("Digite 4 para calcular pontuação média:");
    console.log("Digite 5 para encerrar o programa:");
    
    resposta = parseInt(prompt("Menu de controle da lista de espera:\nDigite 1 para adicionar um novo jogador:\nDigite 2 para buscar por posição:\nDigite 3 para listar o time:\nDigite 4 para calcular pontuação média:\nDigite 5 para encerrar o programa:\n\nDigite o número do comando:"));
    while (isNaN(resposta)) {
        resposta = parseInt(prompt("Número inválido. Digite novamente:"));
    }

    if (resposta == 1)
        adicionarJogador(jogadores);

    else if (resposta == 2){
        let posicao = prompt("Digite a posição que deseja buscar:");
        let resultado = buscarPorPosicao(jogadores, posicao);
        if (resultado.length === 0) {
            alert("Nenhum jogador encontrado para essa posição.");
        } else {
            console.log(`Jogadores na posição "${posicao}":\n` + resultado.join("\n"));
            alert(`Jogadores na posição "${posicao}":\n` + resultado.join("\n"));
        }
    }

    else if (resposta == 3)
    	listarTime(jogadores);

    else if (resposta == 4) {
        let txt = calcularPontuacaoMedia(jogadores);
        console.log(`O valor da pontuação média é de ${txt}.`);
        alert(`O valor da pontuação média é de ${txt}.`)
    }

    else if (resposta == 5) {
        console.log("Fim do programa.");
        alert("Fim do programa.")
    }

    else {
        console.log("Opção inexistente.");
        alert("Opção inexistente.")
    }


} while (resposta !== 5);