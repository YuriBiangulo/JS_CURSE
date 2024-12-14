// função geradora aplicada no contecto de Defi
//utilizei para iteração de um conjunto de dados 
// com a intenção de otimizar  a memoria e processamento dos dados iterados 
// iterando sobre os logs de um Smart Contract
//////////////////////////////////////////////////////////////////
function* iterarLogs(web3, contrato, evento) {  //o evento é o nome do evento que quero buscar
    // Inicializa o bloco a partir do qual os logs serão buscados com 0
    let fromBlock = 0; // que é utlizada para especificar o bloco inicial da busca pelos logs
  
    // Loop infinito onde a funcao geradora busca logs até não haver mais logs
    while (true) {
      // Busca os logs do contrato para o evento especificado, a partir do bloco 'fromBlock' até o último bloco
      const logs = await contrato.getPastEvents(evento, { fromBlock, toBlock: 'latest' });
      // utiliza o metodo getPastEvents do contrato para buscar os logs do evento especificado, 
      //a partir do bloco fromBlock até o ultimo bloco da blockchain
      //o resultado é armazenado na valiavel logs.
  
      // verifica se foram encontrados logs Se não houver logs, sai do loop
      if (logs.length === 0) {
        break;
      }
  
      // Itera sobre cada log encontrado
      for (const log of logs) {
        // Retorna o log atual para o consumidor da função geradora
        yield log; //pausa a execução da funcao geradora e retorna o valor atual do log
        //quando ela for chamada novamente com next(), a execucao continua a partir do proximo yield
      }
  
      // Atualiza o 'fromBlock' para o próximo bloco a ser buscado
      fromBlock = logs[logs.length - 1].blockNumber + 1; //garante que na proxima iteração do loop os 
      //logs anteriores não serao buscados novamente garantindo a eficiente do codigo
    }
  }

  //////////////////////////////////////////////////////
  const geradorDeLogs = iterarLogs(web3, meuContrato, "Transfer"); // criei um objeto gerador 
  //chama a função iterarLogs e passa 3 argumentos 
  //sendo web3 a instancia do Web3.js  para interagir  com a blockchain
  //sendo meuContrato uma instancia do Smart Contract que queremos consultar
  //sendo "Transfer" o nome do evento especifico no contrato que queremos buscar (nesse caso "Transfer")
let log; // declarei uma variavel log sem atribuir valor 

while (!(log = geradorDeLogs.next().done)) {    //um loop infinito que rodara até a condição ser false
    //a condição é : chama o metodo next da função geradora geradorDeLogs que faz a função geradora avançar apra o proximo yield
    //done: verifica a propriedade done retornada por next
    //done por ser booleano indica sea unção geradora terminou de fornecer os logs. 
    //Se done = True, significa que não há mais logs para serem processados e o loop será interrompido
    // ! nega o valor de done . O loop continuara enquanto done for false (enquianto houver logs para serem processados)
    //guarda o resultado em log
  console.log(log.value); // Processa cada log e printa na tela pela propriedade value
  //podemos utilizar esses logs salvando em um banco de dados ou utilizar pra atualizar um dashboard
}
