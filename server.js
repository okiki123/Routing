const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.end('Routing app')
})


app.listen(port, () => {console.log('Express server currently running on port 3000')})