

console.log("Reduce ")

function multiReduce(multiplicador){
  return function(acc, valorCorrente) {
    return [...acc, (valorCorrente * multiplicador)];
  }
}

const valoresMultiplicados = [10,20,30,40].reduce(
  multiReduce(4),
  []
);

console.log(valoresMultiplicados)

arr = [1,2,3,4,5,6,7,8,9,10]

const TabuadaReduce = arr.reduce(function(valorAcumulador, valorAtual) {
  console.log(valorAcumulador)
valorAcumulador.push(valorAtual * 9);
return valorAcumulador
},[])

console.log(TabuadaReduce)