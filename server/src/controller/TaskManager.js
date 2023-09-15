import fs from 'fs'

export default class TaskManager {
  constructor(path) {
    this.path = path
  }

  //--ENTRAGA AL CLIENTE (FRONTEND) LA LISTA DE TAREAS, DE NO ENCONTRAR EL ARCHIVO DEVUELVE UN ARREGLO VACIO
  getTask = async () => {
    try {
      const response = await fs.promises.readFile(this.path, 'utf-8')
      const data = JSON.parse(response)
      return data
    } catch (error) {
      return []
    }
  }

  //--GENERA IDENTIFICADORES (ID) PARA CADA TAREA DE MANERA DINAMICA
  idGenerator = async (listTask) => {
    let highNumber = 0
    for (let number of listTask) {
      if (number.id > highNumber) {
        highNumber = number.id;
      }
    }
    return highNumber + 1;
  }

  //--AGREGA UNA NUEVA TAREA A LA LISTA 
  addNewTask = async (titleTask, date, initTimeFormat) => {
    try {
      const listTask = await this.getTask()
      const assignID = await this.idGenerator(listTask)

      const newTask = {
        id: assignID,
        titleTask,
        initTime: date,
        initTimeFormat,
        finishTimeFormat: "--",
        finishTime: "--",
        totalTime: "--"
      }
      listTask.push(newTask)
      await fs.promises.writeFile(this.path, JSON.stringify(listTask))
      return console.log("Tarea Agregada con exito")
    } catch (error) {
      console.log(error)
    }
  }

  //--ACTUALIZA EL TITULO DE LA TAREA SELECCIONADA
  updatedTask = async (id, titleTask) => {
    try {
      const taskList = await this.getTask()
      for (let i in taskList) {
        if (taskList[i].id === id) {
          taskList[i] = { ...taskList[i], titleTask }
          await fs.promises.writeFile(this.path, JSON.stringify(taskList))
          return console.log("Updated task")
        }
      }
      return console.log("Not Found ID")
    } catch (error) {
      console.log(error)
    }
  }

  //--FINALIZA LA TAREA SELECIONADA Y OBTIENE LOS DATOS DE HORA DE FINALIZACION Y TOTAL DE TIEMPO TRANSCURRIDO 
  finishTask = async (id, time, finishTimeFormat) => {
    try {
      const taskList = await this.getTask()
      const searchTask = taskList.find((task) => task.id === id)

      let date1 = new Date(searchTask.initTime)
      let date2 = new Date(time)

      // Calcular la diferencia en milisegundos entre los dos momentos
      const differenceTime = Math.abs(date1 - date2);

      // Calcular la diferencia en horas, minutos y segundos
      const seconds = Math.floor(differenceTime / 1000) % 60;
      const minutes = Math.floor(differenceTime / (1000 * 60)) % 60;
      const hours = Math.floor(differenceTime / (1000 * 60 * 60));

      let timeTotal = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

      let finishResult = {
        finishTimeFormat,
        finishTime: time,
        totalTime: timeTotal
      }

      for (let i in taskList) {
        if (taskList[i].id === id) {
          taskList[i] = { ...taskList[i], ...finishResult }
          await fs.promises.writeFile(this.path, JSON.stringify(taskList))
          return console.log("Finish task")
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
}