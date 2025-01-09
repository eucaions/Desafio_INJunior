function encontrarElementoUnico (array) {
    for(let i = 0; i < array.length; i++) {
        let temp = array[i];
        if (array.indexOf(temp) === array.lastIndexOf(temp)) {
            console.log(`O número que se repete apenas 1 vez é o ${array[i]}.`);
            return temp;
        }
    }
    console.log("Não há nenhum número que não se repete.");
    return null;
}

let vet = [1,4,2,6,7,8,9,1,2,4,7,6,9];
encontrarElementoUnico(vet);