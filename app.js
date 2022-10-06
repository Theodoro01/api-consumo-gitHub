const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const routes = require('./src/routes/routes')

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Hello World!! Servidor rodando em https://localhost:${process.env.PORT}`)
})  