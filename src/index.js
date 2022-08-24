import express from "express";
import tips from "./database/bd.js"
import controller from "./controllers/controller.js";

const app = express()

app.use(express.json())
controller(app,tips)

const porta = 3000

app.listen(porta, () => {
    console.log(`servidor aberto: http://localhost:${porta}`)
})