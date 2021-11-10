const http = require('http')

const server = http.createServer((req, res) => 
{
    if(req.url=== '/')
    {
        res.end('Hello I am learning Node.js')
    }
    if(req.url === '/about')
    {
        res.end('here is my second page')
    }
    res.end(`
        <h1>HELLO</h1>
        <p>lorem</p>
        <a href='/'>back home</a>
    `)
})
server.listen(5000)