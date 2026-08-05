const filmes = ["hary potter", "toy stoy", "it"]

console.log(filmes[1])

const filmesMdficados = filmes.map(function (filmeAtual, posicao){
    return `O filme ${filmeAtual} está na posição ${posicao}`
})


// OU const filmesMdficados = filmes.map((filmeAtual, posicao) =>
//     `O filme ${filmeAtual} está na posição ${posicao}`)


console.log(filmesMdficados)
console.log(filmes)

const modificarFilmes = (listaFilmes) => listaFilmes.map(filmeAtual => filmeAtual.toUpperCase())

// MESMA COISA  E CIMA function modificarFilmes2(listaFilmes){
//     listaFilmes.map(function(filmeAtual){
//         return filmeAtual.toUpperCase()
//     })
// }


//Ex.01

const preco = [29.9, 150, 45.5, 8,320, 99.99]

const funcaoPrecos = (preco) => preco.map(preco => preco * 0.9)

console.log(funcaoPrecos(preco))
    


const filme3 = { 
    titulo: "miranha",
    anoLancamento: 2026,
    diretor: "tom",
    atores: ["zendaya, tom"]
}

console.log(filme3.diretor)


































