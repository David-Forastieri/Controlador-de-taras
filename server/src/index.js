import express from 'express'
import cors from 'cors'
import taskRouter from './routes/task.router.js'

const server = express()

const DIRECTORIO_PERMITIDO_CORS = "http://localhost:5173";

server.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));

server.use(express.json())

server.use('/task', taskRouter)

server.listen(8080, () => console.log('#--server listening to requests--#'))