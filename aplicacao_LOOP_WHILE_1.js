// utilizado quando não sabemos quantas iterações precisam ser feitas
// cuidado para não fazer loop infinito
//while(teste logico){bloco de comandos}
// do{bloco de comandos} while(teste logico){blcoo de comandos}   ---> garantia de execução de pelo menos uma vez
                                                            // ---> do blco de comandos
const filaTransacoes = [
{ id: 1, status: 'pendente' },
{ id: 2, status: 'processando' },
// ...
];

let indice = 0;
while (indice < filaTransacoes.length) {
    const transacao = filaTransacoes[indice];
    if (transacao.status === 'processando') {
// Processar a transação
        console.log(`Processando transação ${transacao.id}`);
        filaTransacoes.splice(indice, 1); // Remover a transação da fila
        } else {
        indice++;
    }
}    
                                       