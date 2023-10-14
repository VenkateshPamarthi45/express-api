const express = module.exports = require('express')
const products = require('./src/products/router.js')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/health', (request, response) => {
    return response.send({ "message": "ok" })
})

app.use("/products", products)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))