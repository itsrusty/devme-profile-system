import express from "express"
import morgan from "morgan"
import colors from "colors"
import dotenv from "dotenv"

const port = process.env.PORT
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())



const bootstrap = () => {
    try {
        app.listen(port)        
    } catch (error) {
        console.error(error)
    }
}

bootstrap()