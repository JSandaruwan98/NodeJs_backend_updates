var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes')

const app = express()


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


const dbUrl = 'mongodb+srv://janithsanda256:Asdf%401234@jscoding.xlspylj.mongodb.net/User'

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl,connectionParams)
.then(()=>{
    console.info("connect to db")
})
.catch((e)=>{
    console.log("Error",e)
})

app.use('/api/users', userRoutes);

app.listen(3000, ()=>{
    console.log("Listening on Port: 3000")
})