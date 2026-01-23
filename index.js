const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const connection = require('./database/conection')
const cadastroUser = require('./database/cadastro_usuario')
const usuario = require('./database/cadastro_usuario')

app.use(express.static('public'))
app.use('/video', express.static('video'));


//configurando body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//configurando ejs
app.set('view engine' , 'ejs')

//configurando arquivos staticos
app.use(express.static('public'))

//configuração da conexão com o banco de dados
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão com o banco de Dados feita com Sucesso!!')
    }).catch((error)=>{
        console.log(error)
    })

//ROTA PRINCIPAL
app.get('/' , (req , res)=>{
    res.render('index')
})

//Rota Noxzon Lista
app.get('/NoxzonLista' , (req , res)=>{
    res.send('<h1>Noxzon Lista</h1>')
})

//Rota inicio
app.get('/inicio' , (req , res)=>{
    res.render('page/inicio')
})

//Rota main
app.get('/main' , (req , res)=>{
    res.render('page/main')
})

//Rota dos criadores
app.get('/criadores' , (req , res)=>{
    res.render('page/criadores')
})

//Rota para filmes
app.get('/filmes' , (req , res)=>{
    res.render('page/filmes')
})

//Rota para series
app.get('/series' , (req , res)=>{
    res.render('page/series')
})

//Rota para acao
app.get('/acao' , (req , res)=>{
    res.render('page/acao')
})

//Rota para comédia
app.get('/comedia' , (req , res)=>{
    res.render('page/comedia')
})

//Rota para romance
app.get('/romance' , (req , res)=>{
    res.render('page/romance')
})

//Rota para fantasia
app.get('/fantasia' , (req , res)=>{
    res.render('page/fantasia')
})

//Rota para mangá
app.get('/manga' , (req , res)=>{
    res.render('page/manga')
})

//Rota para o progresso todos os episódios
app.get('/o-progresso-todos-os-episodios' , (req , res)=>{
    res.render('page/o-progresso')
})

//Rota para o progresso episódio 1
app.get('/o-progresso-episodio-1' , (req , res)=>{
    res.render('page/episodio-1')
})

//Rota para o progresso episódio 2
app.get('/o-progresso-episodio-2' , (req , res)=>{
    res.render('page/episodio-2')
})

//Rota para o progresso episódio 3
app.get('/o-progresso-episodio-3' , (req , res)=>{
    res.render('page/episodio-3')
})

//Rota para o progresso episódio 4
app.get('/o-progresso-episodio-4' , (req , res)=>{
    res.render('page/episodio-4')
})

//Rota para o progresso episódio 5
app.get('/o-progresso-episodio-5' , (req , res)=>{
    res.render('page/episodio-5')
})

//Rota para o progresso temporada 2 episódio 1
app.get('/o-progresso-temporada-2-episodio-1' , (req , res)=>{
    res.render('page/temporada-2-episodio-1')
})

//Rota para o progresso temporada 2 episódio 2
app.get('/o-progresso-temporada-2-episodio-2' , (req , res)=>{
    res.render('page/temporada-2-episodio-2')
})

//Rota para o progresso temporada 2 episódio 3
app.get('/o-progresso-temporada-2-episodio-3' , (req , res)=>{
    res.render('page/temporada-2-episodio-3')
})

//INICIANDO O SERVIDOR
app.listen(port , ()=>{
    console.log('Servidor Online!!')
})