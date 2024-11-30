import express from 'express';
const app = express()
const port = 7000

app.get('/express', (req, res) => {
    // res.write('Hello World. this is index.js')
    res.write(req.url);
    res.end()
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


//  warning: the default view engine will not be jade in future releases