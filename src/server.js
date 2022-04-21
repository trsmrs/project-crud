const express = require('express')
const path = require('path')
const db = require('./database')
const routes = require('./routes')
const app = express()


// conexão com o db
db.connect()




// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))


// definindo as rotas
app.use('/', routes)


// 404 not found (error)
app.use((req, res) => {
    res.send('Página não encontrada!')
})


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on ${port}`))
