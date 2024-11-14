let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação que deseja realizar (soma, subtração, multiplicação, divisão):");

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}


let resultado;

switch (operacao) {
    case "soma":
        resultado = soma(numero1, numero2);
        break;
    case "subtração":
        resultado = subtracao(numero1, numero2);
        break;
    case "multiplicação":
        resultado = multiplicacao(numero1, numero2);
        break;
    case "divisão":
        resultado = divisao(numero1, numero2);
        break;
    default:
        resultado = "Operação inválida!";
}

alert("O resultado da operação é: " + resultado);
console.log("O resultado da operação é:", resultado);
