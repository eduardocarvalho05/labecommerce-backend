function jogoParOuImpar(escolhaUsuario, numeroUsuario) {
    if (escolhaUsuario !== 'par' && escolhaUsuario !== 'impar') {
        return 'Escolha inválida. Por favor, escolha par ou ímpar.';
    }

    if (isNaN(numeroUsuario)) {
        return 'Por favor, digite um número válido.';
    }

    let escolhaComputador = escolhaUsuario === "par" ? "impar" : "par";

    // Gera um número aleatório para o computador
    let numeroComputador = Math.floor(Math.random() * 6);

    // Calcula a soma
    let soma = numeroUsuario + numeroComputador;

    console.log(`Você escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}.`);
    console.log(`Seu número é o ${numeroUsuario}`);
    console.log(`O número do computador foi o ${numeroComputador}`);
    console.log(`A soma foi: ${soma}`);

    // Verifica se a soma é par ou ímpar
    let resultado = soma % 2 === 0 ? 'par' : 'impar';

    console.log(`O resultado é ${resultado}.`);

    // Verifica se o usuário venceu
    return escolhaUsuario === resultado ? 'Você ganhou!' : 'Você perdeu!';
}

// Obtém os argumentos da linha de comando
const [node, script, escolhaUsuario, numeroUsuario] = process.argv;

// Chama a função do jogo e exibe o resultado
console.log(jogoParOuImpar(escolhaUsuario.toLowerCase(), parseInt(numeroUsuario)));