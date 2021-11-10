const http = require('http')

const server = http.createServer((req, res) => 
{
    res.write ('Hello I am learning Node.js')
    res.end()
})
server.listen(8000)