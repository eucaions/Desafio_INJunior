let valor = parseInt(prompt("Digite um número inteiro:"));
while (isNaN(valor)) {
    alert("Número inválido. Digite novamente:");
    valor = parseInt(prompt("Digite um número inteiro:"));
}
switch (true) {
    case (valor%3 == 0 && valor%5 == 0):
        alert("fizzbuzz");
        console.log("fizzbuzz");
        break;
    case (valor % 3 == 0):
        alert("fizz");
        console.log("fizz");
        break;
    case (valor % 5 == 0):
        alert("buzz");
        console.log("buzz");
        break;
    default:
        alert("");
        console.log("");
}