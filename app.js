const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const { static } = require('express')


app.engine('hbs', exphbs({ defaultLayout: "main",extname: "hbs" }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use('/', (req, res) => {
  res.render('test')
})

app.listen(3000, () => {
  // db.sequelize.sync()
  console.log(`Example app listening on port !`)
})
console.log('test 23')


console.log('test 23')
console.log('test 23')
console.log('test 23')
console.log('test 23')
console.log('test 23')