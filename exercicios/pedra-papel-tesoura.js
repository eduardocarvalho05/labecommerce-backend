function pedraPapelTesoura(escolhaUsuario) {
    if (escolhaUsuario !== 'pedra' && escolhaUsuario !== 'papel' && escolhaUsuario !== 'tesoura') {
        return 'Escolha inválida. Por favor, escolha entre pedra, papel ou tesoura.';
    }

    let escolhaComputador = '';

    let options = ['pedra', 'papel', 'tesoura'];
    let randomIndex = Math.floor(Math.random() * 3);
    escolhaComputador = options[randomIndex];

    console.log(`Você escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}.`)

    if (escolhaUsuario === escolhaComputador) {
        return 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        return 'Você ganhou!';
    } else {
        return 'O computador ganhou!';
    }
}

// Obtém os argumentos da linha de comando
const [node, script, escolhaUsuario] = process.argv;

// Chama a função do jogo e exibe o resultado
console.log(pedraPapelTesoura(escolhaUsuario));