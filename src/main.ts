import express, { Request, Response } from 'express';
import cors from 'cors';

import taskRoutes from './routes/taskRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/tasks', taskRoutes)

app.get('/', function(req: Request, res: Response) {
  res.send("Hello world!")
})

app.listen(5956, function() {
  console.log('To on tmj!!!!')
})