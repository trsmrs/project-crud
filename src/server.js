const express = require('express')
const { listen } = require('express/lib/application')
const path = require('path')

const app = express()



// definindo o template engine
app.set('view engine', 'ejs')


// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))


// rotas
app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Titulo Teste'
    })
})


// 404 not found (error)

app.use((res, res)=>{
    res.setEncoding('Página não encontrada!')
})



// executando o servidor

const port = process.env.PORT || 8080

app.listen(`Server is listening on ${port}`)
