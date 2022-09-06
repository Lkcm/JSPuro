console.log("NewMap")

const mapa = new Map([
    [0, "Lucas"],
    [1, "Kroger"],
    [2, "Costa"]
])

mapa.set(3, "Moreira")

console.log(mapa)

console.log(mapa.get(2)) //Forma de acessar o Map
console.log(mapa.size)// Tamanho do Map 
console.log('values :',Array.from(mapa.values()))
mapa.forEach(function(value, key){
    console.log('key forEach:', key)
})

for(let [key, value] of mapa) {
    console.log('valor forOf:', value)
}

console.log('Com entries:',Array.from(mapa.entries()))

/* TIPOS
-has se tiver no Map retorna = true
-delete Deleta
-clear Deleta tudo
-keys retorna as keys ex: 0,1,2
-values retorna os valores ex: Lucas Kroger Costa
-entries [1 pos chave 2 pos valor]
-size
-forEach
*/

//Exemplo de Map com Arrays

const usuarios = new Map([
    [0, { nome:'Lucas', pais:'Brasil'}],
    [1, { nome:'Thiago', pais:'China'}],
    [2, { nome:'Davi', pais:'Argentina'}],
    [3, { nome:'Julia', pais:'Canada'}],
    [4, { nome:'Pedro', pais:'Brasil'}],
    [5, { nome:'Luciana', pais:'Brasil'}],
    [6, { nome:'Louyse', pais:'Japao'}],
    [7, { nome:'Hugo', pais:'Russia'}]
])

console.log(usuarios)

console.log(Array.from(usuarios.entries())
.filter(function(usuarioEntrada) {
    return usuarioEntrada[1].pais === 'Brasil'
}))
