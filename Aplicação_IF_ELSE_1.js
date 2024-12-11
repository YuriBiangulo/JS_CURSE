//IF CONDICIONAL  --> IF(teste logico){bloco de comandos}else{bloco de comandos alternativo}
let SaldoUsuario=400;
let ValorTransacao=500;


if(SaldoUsuario>=ValorTransacao){
    console.log("Transação aprovada! Saldo Suficiente.\n O saldo restante é de: ", + (SaldoUsuario-ValorTransacao) + " reais");
}else{
console.log("Saldo insuficiente! Transação negada. \n Você precisa de: " + -(SaldoUsuario-ValorTransacao)+" reais para realizar essa transação.");
}
// EXEMPLO ACIMA PARA VERIFICAÇÃO DE SALDO EM CONTA PARA REALIZAR UMA OPERAÇÃO DE DEBITO

//CALCULO DE TAXAS DE INVESTIMENTO
let ValorInvest = 2000;

if (ValorInvest >30000){
    taxaInvest=0.45; // taxa de investimento de 0,45 para valores acima de 30 mil
}else{
    taxaInvest=1.8;   // taxa de investimento de 1.8% para outros valores abaixo de 30 mil
}

let taxaTotal = ValorInvest*taxaInvest/100;
console.log("Taxa total: " + taxaTotal + " reais ao ano. ");
