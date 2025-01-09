function verificarIdades(nascimento) {
    let ano = parseInt(prompt("Digite o ano atual:"));
    while (isNaN(ano) || ano <= 0) {
        alert("Ano inválido. Digite novamente:");
        ano = parseInt(prompt("Digite o ano atual:"));
    }
    let vetMaiorMenor = [];
    for (let i = 0; i < nascimento.length; i++) {
        if (ano - nascimento[i] >= 18)
            vetMaiorMenor.push("Maior");
        else
            vetMaiorMenor.push("Menor");
    }
    for (let i = 0; i < vetMaiorMenor.length; i++) {
        alert(`Pessoa ${i+1}: ${vetMaiorMenor[i]} de idade`);
        }
    return vetMaiorMenor;

}

