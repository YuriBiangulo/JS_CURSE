// tem a função de percorrer arrays ( coleções)//quando preciso percorrer todosos elementos de uma coleção,
// mudar elementos ou iterar, etc
// posso passar até 2 ou 3 parametros
const cursos=["HTML","CSS","JavaScript","PHP","React"]
//cursos.map(elemento da coleção que ele esta operando, indice(posição desses elementos) )
cursos.map((el,i)=>{
    console.log("Curso:" + el + " - Posição do curso: " + i)
})
