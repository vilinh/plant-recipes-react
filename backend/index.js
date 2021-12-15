const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const port = 3001

// connect to MongoDB
const connection_url = "mongodb+srv://vi:cats123@plantrecipes.rrkes.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.log(`Could not connect due to ${error}`))

// Schema/model
const RecipeSchema = new mongoose.Schema({
  name: String,
  time: String,
  link: String,
  description: String,
  ingredients: [String],
  instructions: [String]
}, {collection: 'Recipes'});

const Recipe = mongoose.model('Recipe', RecipeSchema)


// default route
app.get('/', (req, res) => {
  res.send('Hello all my name is Vi-Linh')
})

//uses query params
app.get('/recipe', (req, res) => {
  const recipeName = req.query.anything;
  res.send(`This is my ${recipeName} page`)
  console.log(recipeName)
})

//get all recipes
app.get('/api/recipe', async (req, res) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})
//get specific recipe
app.get('/api/recipes', async (req, res) => {
  const recipe = await Recipe.findOne({name: req.query.recipeName})
  res.send(recipe)
})



app.post('/api/recipe', async(req, res) => {
  const { name, time, link, description, ingredients, instructions } = req.body
  let recipe = new Recipe({
    name, 
    time,
    link,
    description,
    ingredients,
    instructions
  })

  recipe.save(function(err, recipe) {
    if (err) {
      return next(err)
    }
    res.send(`Recipe named ${name} added to collection`)
  })
})

app.delete('/api/recipe', (req, res) => {
  Recipe.findByIdAndRemove(req.body.id, (err, person) => {
    if (err) {
      comsole.log(err);
      res.send(err.message);
    }
    res.send(`Recipe with id ${req.body.id} was deleted`)
  })
})

app.listen(port)