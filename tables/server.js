const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const users = [
        {name: 'Fidha Fathima M', email: 'fidh3549@gmail.com', age: 21},
        {name: 'Sajitha M', email: 'sajitha@gmail.com', age: 52},
        {name: 'Musthafa M', email: 'musthafamasood@gmail.com', age: 62},
        {name: 'Masood M', email: 'masood@gmail.com', age: 28},
        {name: 'Minhaj M', email: 'minhaj@gmail.com', age: 26},
    ]

    res.render('table', {users})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))