import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routes/routes.js"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", router)

const port = 5000

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Error: ${err}`))
app.listen(port, () => {console.log(`Listening on port ${port}...`)})