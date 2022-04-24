const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path");
const nodemailer = require("nodemailer");

const app = express()
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const port = 3001

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});


// connect to MongoDB
const connection_url = "mongodb+srv://viv:cherry@cluster0.rrkes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.log(`Could not connect due to ${error}`))

// Schema/model
const RecipeSchema = new mongoose.Schema({
  name: String,
  time: String,
  link: String,
  image: String,
  desc: String,
  ingredients: [String],
  instructions: [String]
}, {collection: 'Recipes'});

//collection in MongoDB + type of items
const Recipe = mongoose.model('Recipe', RecipeSchema)

// default route
app.get('/', (req, res) => {
  res.send('Hello')
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
  const { name, time, image, link, desc, ingredients, instructions } = req.body
  let recipe = new Recipe({
    name, 
    time,
    image,
    link,
    desc,
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