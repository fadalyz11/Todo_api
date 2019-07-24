const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/Todo', { useNewUrlParser: true })
.then(() => console.log('Connected To Db'))
.catch(err => console.log('Not Connected To Db' , err))



module.exports.Todo = require('./todo')


