import { Router } from 'express'
import TaskManager from '../controller/TaskManager.js'

const router = Router()

const manager = new TaskManager("src/")

router.get('/:user', async (req, res) => {
  //http://localhost:8080/task
  let { user } = req.params

  try {
    const fileName = user + ".json";
    const manager = new TaskManager("src/" + fileName);
    const task = await manager.getTask();
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ mesagge: `Internal server error. ${error}` })
  }
})

router.post('/:user', async (req, res) => {
  //http://localhost:8080/task
  const { titleTask } = req.body
  let { user } = req.params

  let date = new Date()

  let hora = date.getHours().toString().padStart(2, '0');
  let minutos = date.getMinutes().toString().padStart(2, '0');
  let segundos = date.getSeconds().toString().padStart(2, '0');

  let initTimeFormat = `${hora}:${minutos}:${segundos}`
  try {
    const fileName = user + ".json";
    const manager = new TaskManager("src/" + fileName);
    await manager.addNewTask(titleTask, date, initTimeFormat)
    res.status(200).json({ mesagge: "Tarea agregada con exito" })
  } catch (error) {
    res.status(500).json({ mesagge: `Internal server error. ${error}` })
  }
})

router.put('/:id/edit/:user', async (req, res) => {
  // http://localhost:8080/task/id/edit
  let id = parseInt(req.params.id)
  let { titleTask } = req.body
  let { user } = req.params

  try {
    const fileName = user + ".json";
    const manager = new TaskManager("src/" + fileName);
    await manager.updatedTask(id, titleTask)
    res.status(201).json({ mesagge: "Titulo actualizado" })
  } catch (error) {
    res.status(500).json({ mesagge: `Internal server error. ${error}` })
  }
})

router.put('/:id/finishTask/:user', async (req, res) => {
  //http://localhost:8080/task/id/finishTask
  const id = parseInt(req.params.id)
  let { user } = req.params

  let time = new Date()
  let hora = time.getHours().toString().padStart(2, '0');
  let minutos = time.getMinutes().toString().padStart(2, '0');
  let segundos = time.getSeconds().toString().padStart(2, '0');

  let finishTimeFormat = `${hora}:${minutos}:${segundos}`

  try {
    const fileName = user + ".json";
    const manager = new TaskManager("src/" + fileName);
    await manager.finishTask(id, time, finishTimeFormat)
    res.status(200).json({ mesagge: "Tarea finalizada" })
  } catch (error) {
    res.status(500).json({ mesagge: `Internal server error. ${error}` })
  }
})

export default router