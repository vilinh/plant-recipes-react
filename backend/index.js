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
  res.send('Hello world')
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
app.get('/api/recipe/:recipeName', async function (req, res) {
  const recipe = await Recipe.findOne({'name':req.params.recipeName})
  res.send(recipe);
});
  
//add new recipe given recipe in body
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

  await recipe.save(function(err, recipe) {
    if (err) {
      return next(err)
    }
    res.send(`Recipe named ${name} added to collection`)
  })
})

//adds ingredient to given recipe
app.put('/api/recipe/:recipeName/ingredient', (req, res) => {
  const recipeName = req.params.recipeName
  const ingredient = req.body.newIngredient

  Recipe.findOneAndUpdate(
    {name: recipeName},
    { $push: { ingredients: ingredient } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send(`${ingredient} added to ingredients`)
      }
    }
  )
})

//add instruction to given recipe
app.put('/api/recipe/:recipeName/instruction', async (req, res) => {
  const recipeName = req.params.recipeName
  const instruction = req.body.newInstruction
  // const recipe = await Recipe.findOne({name: recipeName})
  // recipe.instructions.push(instruction)
  // await recipe.save()

  Recipe.findOneAndUpdate(
    {name: recipeName},
    { $push: { instructions: instruction } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send(`${instruction} added to instructions`)
      }
    }
  )
})

//delete recipe by id
app.delete('/api/recipe', (req, res) => {
  Recipe.findByIdAndRemove(req.body.id, (err, recipe) => {
    if (err) {
      comsole.log(err);
      res.send(err.message);
    }
    res.send(`Recipe with id ${req.body.id} was deleted`)
  })
})

app.listen(port)