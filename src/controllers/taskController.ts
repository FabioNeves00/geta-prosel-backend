import { Request, Response } from "express"

interface ITask {
  id: string
  nome: string
}
let tasks: ITask[] = []

class TaskController {
  create(req: Request, res: Response){
    const newTask = { id: tasks.length.toString(), nome: req.body.nome }
    tasks.push(newTask)
    return res.send(newTask)
  }

  getTasks(req: Request, res: Response){
    return res.send(tasks)
  }

  getTask(req: Request, res: Response){
    const task = tasks.filter((task) => task.id === req.params.id)
    return res.send(task)
  }

  deleteTask(req: Request, res: Response){
    tasks = tasks.filter((task) => task.id !== req.params.id)
    return res.send(tasks)
  }
}

export default new TaskController