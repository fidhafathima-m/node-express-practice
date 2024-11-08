const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
const path = require('path');

// Serve static files
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
    const cards = [
        {img: 'images/pexels-valeriya-1639557.jpg', item: 'Burger', description: 'A sandwich made of a ground beef patty served in a bun with lettuce, tomato, cheese, and condiments.', price: 220},
        {img: 'images/pexels-fariphotography-803963.jpg', item: 'Pasta', description: 'An Italian staple food made from durum wheat and water, commonly served with sauces such as marinara or Alfredo.', price: 320},
        {img: 'images/pexels-muffin-1653877.jpg', item: 'Pizza', description: ' A delicious Italian dish consisting of a round, flat bread base topped with cheese, tomatoes, and various toppings.', price: 230},
        {img: 'images/pexels-pixabay-248444.jpg', item: 'Sushi', description: 'A Japanese dish featuring vinegared rice accompanied by various ingredients such as raw fish, vegetables, and occasionally seaweed.', price: 100},
        {img: 'images/pexels-chitokan-2092507.jpg', item: 'Tacos', description: 'A Mexican dish consisting of a folded tortilla filled with a variety of fillings like meat, beans, cheese, and vegetables.', price: 231},
        {img: 'images/pexels-jeshoots-3631.jpg', item: 'Ice Cream', description: ' A frozen dessert made from cream, sugar, and flavorings, often churned and served in cones or bowls.', price: 199},
    ]

    res.render('index', {cards})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))