console.log("Testando arquivo process-argv");

process.argv[2], process.argv[3]

function nomeCurso(nome, curso) {
    console.log(`Meu nome é ${nome} e estou cursando back-end na ${curso}`);
}
nomeCurso(process.argv[2], process.argv[3]);
