// OPERAÇÕES TERNARIAS 
let num=10
res=(num%2 ? "par" : "impar")  // teste logico ? se true  : se false
console.log(res)
//0 = false
//1=true

//aplicação melhor na pratica
let custo = 16
let x=1
let saldo=15
res3 = saldo-custo
res2=((saldo/custo)>x ? "Operação valida\n" +" Saldo Disponivel: "+ res3 : "Operação Negada\n" + "Saldo insuficiente" + "\nFalta :" + -res3 + " real de saldo para realizar essa operação!")
// compara uma operação de saldo e se o valor for insuficiente ele te fala e fala quanto falta
// se tiver saldo sufiente ele realiza a operação e te avisa
console.log(res2)
