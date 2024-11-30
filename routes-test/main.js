import { createServer } from 'http'
// const url = require('url')
import { parse } from 'url';
const port = 9000

createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write('Hello Node JS!. Thi main.js');
    // var q = parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    var q = parse(req.url, true).query;
    var txt = `${q.year}, ${q.month}`
    // res.write(req.url);
    res.end(txt)
}).listen(port, () => {
    console.log(`App running on port ${port}`)
});

// http.createServer(function)

