console.log('Task Manager App')

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const connectDb = require('./db/connect')
require('dotenv').config()


//middleware

app.use(express.json())
app.use(express.static('./public'))


//routes

app.get('/hello', (req, res) => {
    res.send('task manager application')
})

app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks'              -get all the tasks
//app.post('/api/v1/tasks')              -create a new task
//app.get('/api/v1/tasks/:id')            -get one task
//app.patch('/api/v1/tasks/:id')              -update one task
//app.delete('/api/v1/tasks/:id')              -delete one task




const port = 8080

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port: ${port} ...`))
    } catch (error) {
        console.log(error);
    }
}
start()



