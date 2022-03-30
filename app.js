const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose.js')

const app = express()
const port = 3000

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    // 建立selected函式來讓index.handlebars中select的option被選取時產生selected
    selected: function (option, value) {
      if (option === value) {
        return 'selected'
      } else {
        return ''
      }
    }
  }
}))
app.set('view engine', 'hbs')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
