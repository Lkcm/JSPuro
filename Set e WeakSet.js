console.log("Set")

const set = new Set([
  1,
  2,
  3,
  4,
  5,
  "Lucas",
  [1,2,3],
  {
    carro1: "azul",
    carro2: "vermelho",
    carro3: "verde"
},

]);

console.log(set)

//- METODOS
/*
-size
-add
-has
-delete
-clear
-values
-entries
- forEach
*/

// OQ ele permimte ?

//Uniao
//Intersecao Aulas de conjuntos lembra Lucas do futuro idiota
//Diferenca

{

  // Uniao 

  const conjunto1 = [2, 4 ,6 ,8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
  const conjunto2 = [3,6,9,12,15,18,21,24,27,30]

  const set = new Set([...conjunto1, ...conjunto2])

  console.log("Com set", set)

  console.log("Sem set", [...conjunto1, ...conjunto2])
}




{
 // Intersecao
 
 const conjunto1 = new Set([2, 4 ,6 ,8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
 const conjunto2 = new Set([3,6,9,12,15,18,21,24,27,30]);


 console.log([...conjunto1].filter(function(valor) {
   return conjunto2.has(valor)
 }))
}

{
  //Diferenca

  const conjunto1 = new Set([2, 4 ,6 ,8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
  const conjunto2 = new Set([3,6,9,12,15,18,21,24,27,30]);
 
  console.log("diferenca",[...conjunto1].filter(function(valor) {
    return !conjunto2.has(valor)
  }))

}

// WEAK SET

// mesma coisa do set porem vc n pode usar valores primitivos 
//So possui add, has e delete
//Nao impede que o valor seja apagado da memoria 
// Exemplo do obj null que no weak set tbm fica null

const ws = new WeakSet;

obj1 = {}

console.log(ws.add(obj1))

console.log(ws.has(obj1))