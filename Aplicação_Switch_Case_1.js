/*Aplicação Switch case  -->  Switch: 
                                    case 1:
                                        (expressão)
                                        break
                                    case 2:
                                        (empressão)
                                        break
                                    Default:
                                        (expressão)
                                        break
*//*
let colocacao=6;

switch(colocacao){
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
         break;
   case 3:
        console.log("Terceiro Lugar");
        break;
    case 4: case 5: case 6:
        console.log("Não obteve classificação geral.");
    default:
        console.log("Nao Subiu no podio.");
        break;
}
*//*
// CALCULO DE TAXA DE ACORDO COM TIPO DE TOKEN 
function calctax(token){
    let taxa;

    switch(token){
        case 'ETH':
            taxa=0.02; //2%
            break;
        case 'USDC':
            taxa=0.01; //1%
            break;
        case 'BTC':
            taxa=0.001; //0.1%
            break;
        default:
            taxa=0.5; // 5% para outros tokens
    }
    return taxa;
}
*//*
//ROTEAMENTO DE PAGINAS COM BASE EWM UM PARAMETRO NA URL:  Direcionaro usuario para as paginas corretas com baseem suasações
function renderizarPagina(pathname) {
    switch (pathname) {
        case '/swap':
            return <SwapPage />;
        case '/pool':
            return <PoolPage />;
        default:
            return <HomePage />;
    }
*//*
//CALCULO DE RENDIMENTO COM BASE EM UM PROTOCOLO DEFI:
function calcularRendimento(protocolo, valorInvestido, tempo) {
    switch (protocolo) {
        case 'uniswap':
            // Cálculo baseado nas taxas de swap do Uniswap
            break;
        case 'compound':
            // Cálculo baseado nas taxas de juros do Compound
            break;
        default:
            console.error('Protocolo não suportado');
    }
}
*/
