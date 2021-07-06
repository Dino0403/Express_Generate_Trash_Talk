// import package
const express = require('express')
const exphdbs = require('express-handlebars')
const generateFunckWord = require('./index')

// setting app
const app = express()
const port = 3000

// setting handlebars
app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parse
app.use(express.urlencoded({ extended: true }))

// setting router
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.title
  console.log(option)
  const results = generateFunckWord(option)
  console.log(results)
  res.render('index', { results: results, title: option })
})

// listen server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})