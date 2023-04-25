const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/produtos', (req, res) => {
    const produtos = [
        {
            urlImagem: "https://static.vecteezy.com/ti/vetor-gratis/p3/2099399-mecanizado-transportador-para-montagem-do-robo-ilustracao-personagem-plano-vetor.jpg",
            nomeProduto: "Robô Mecanizado",
            preco: "R$ 240,00"
        },
        {
            urlImagem:"https://legobrasil.vteximg.com.br/arquivos/ids/173371-1000-1000/lego_51515_mindstorms_robo_inventor_01.jpg?v=637492698815130000",
            nomeProduto: "Robô LEGO",
            preco: "R$ 45,00"
        },
    ]
  res.send(produtos)
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})