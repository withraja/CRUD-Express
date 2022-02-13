const express = require('express');
const app = express();
const route = require('./routes')
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(route)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
