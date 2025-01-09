alert("Conversão de valores em Real para Dólar e Euro:");
let real = parseFloat(prompt("Digite o valor em Reais (R$):")).toFixed(2);
while (isNaN(real)) {
    real = parseFloat(prompt("Valor inválido. Digite o valor em Reais (R$):")).toFixed(2);
}
alert(`O valor de R$ ${real} convertido para Euro fica em ${(real/6.10).toFixed(2)}`);
alert(`O valor de R$ ${real} convertido para Dólar fica em ${(real/5.70).toFixed(2)}`);