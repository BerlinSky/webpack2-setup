var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path');
var _ = require('lodash');

var bodyParser = require('body-parser');

var users = []

fs.readFile(path.resolve(__dirname, './data/users.json'), {encoding: 'utf8'}, function(err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function(user) {
    user.name.full = user.name.first + ' ' + user.name.last
    users.push(user)
  })
})

function getUserFilePath(username) {
  return path.join(__dirname, 'data', 'users', username) + '.json';
}
// function getUserFilePath (username) {
//   return path.join(__dirname, 'users', username) + '.json'
// }

function getUser(username) {
  var user = JSON.parse(fs.readFileSync(getUserFilePath(username), { encoding: 'utf8'}))
  user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
  _.keys(user.location).forEach(function([key]) {
    user.location[key] = _.startCase(user.location[key])
  })
  return user;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/favicon.ico', function(req, res) {
  res.end()
})

app.use('/profilepics', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  var users = []
  var dir = path.join(__dirname, 'data', 'users');
  fs.readdir(dir, function (err, files) {
    files.forEach(function (file) {
      fs.readFile(path.join(__dirname, 'data', 'users', file), {encoding: 'utf8'}, function (err, data) {
        var user = JSON.parse(data)
        user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
        users.push(user)
        if (users.length === files.length) res.render('index', {users: users})
      })
    })
  })
})

app.get('/:username', function (req, res) {
  var username = req.params.username

  console.log("username", username);

  var user = getUser(username)
  console.log("user", user);

  res.render('user', {
    user: user,
    address: user.location
  })
})

app.put('/:username', function (req, res) {
  var username = req.params.username
  var user = getUser(username)
  user.location = req.body
  saveUser(username, user)
  res.end()
})

app.delete('/:username', function (req, res) {
  var fp = getUserFilePath(req.params.username)
  fs.unlinkSync(fp) // delete the file
  res.sendStatus(200)
})


app.get('/service', function(req, res) {
  res.send('This is the service page')
})

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

