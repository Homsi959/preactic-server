import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const PORT = 2000
const app = express()
const DB_URL = `mongodb+srv://homsi:ScTtz5XSCpiDXfZy@cluster0.n8gjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json())


startApp()
async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log("SERVER PORT: " + PORT))
    } catch (e) {
        console.log(e);
    }
}
