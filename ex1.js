function teste(valor,txt) {
    while (isNaN(valor)) {
        alert("Não é um número. Digite um número para prosseguir");
        valor = parseInt(prompt(`Digite o valor de ${txt}:`));
    }
} 

alert("Programa para calcular raízes de equações quadráticas(Ax^2 + Bx + C)");

let a = parseInt(prompt("Digite o valor de A:"));
teste(a,`A`);

let b = parseInt(prompt("Digite o valor de B:"));
teste(b,`B`);

let c = parseInt(prompt("Digite o valor de C:"));
teste(c,`C`);


let delta = (b*b) - (4*a*c);

function raizes(valorDelta, a, b) {
    let x = (-b + valorDelta) / (2*a);
    return x;
}

if (delta > 0) {
    let x1 = raizes(delta**0.5 , a, b);
    let x2 = raizes(-(delta**0.5) , a, b);
    alert(`O valor das raízes foi ${x1} e ${x2}`);
    console.log(`O valor das raízes foi ${x1} e ${x2}`);
}
else if (delta == 0) {
    let x1 = raizes(delta**0.5 , a, b);
    alert(`O valor da raíz foi ${x1}`);
    console.log(`O valor da raíz foi ${x1}`);
}
else {
    alert(`Não existem raízes reais para essa equação`);
    console.log(`Não existem raízes reais para essa equação`);
}