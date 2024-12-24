// POSSO PEGAR OS ELEMENTOS PELO ID E FAZER MANIPULAÇÕES 

const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")


/*
console.log(dc1) // pedi pra printar tudo em c1
console.log(dc1.id) //pedi pra printar o que está contido em c1
console.log(dc1.innerHTML)  // pedi pra printar o que tem denro do HTML 
*/
const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6] // posso transformar em um array para percorrer os elementos 

for(d of arrayElementos )
    d.innerHTML="CFB Cursos"    // transformei todo os innerHTML em CFB CURSOS

console.log(arrayElementos)
