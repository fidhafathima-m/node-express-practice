const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const books = [
        {item: 'The Great Gatsby by F. Scott Fitzgerald'},
        {item: 'To Kill a Mockingbird by Harper Lee'},
        {item: '1984 by George Orwell'},
        {item: 'Moby Dick by Herman Melville'},
        {item: 'The Catcher in the Rye by J.D. Salinger'},
        {item: 'Pride and Prejudice by Jane Austen'},
    ]
    res.render('items', {books})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))