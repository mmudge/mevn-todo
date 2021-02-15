const { Schema, createConnection } = require('mongoose')
// const connectionString = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb'
const exampleConnectionString = 'mongodb://localhost:27017/mevn-example'
const connection = createConnection(exampleConnectionString, { useNewUrlParser: true })

const userSchema = new Schema({
  name: String,
  password: String
})

const User = connection.model("User", userSchema)

const todoSchema = new Schema( {
  name: String,
  done: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'User'}
})

const Todo = connection.model('Todo', todoSchema)

module.exports = {
  User,
  Todo
}
