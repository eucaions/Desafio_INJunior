let valor = parseInt(prompt("Digite um número inteiro:"));
while (isNaN(valor)) {
    alert("Número inválido. Digite novamente:");
    valor = parseInt(prompt("Digite um número inteiro:"));
}
switch (true) {
    case (valor%3 == 0 && valor%5 == 0):
        alert("fizzbuzz");
        break;
    case (valor % 3 == 0):
        alert("fizz");
        break;
    case (valor % 5 == 0):
        alert("buzz");
        break;
    default:
        alert("Nada");
}