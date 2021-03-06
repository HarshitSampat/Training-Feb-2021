const http = require('http');

const products = require('./data/product.json')

const server = http.createServer((req, res) => {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(products))
    res.end()
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})