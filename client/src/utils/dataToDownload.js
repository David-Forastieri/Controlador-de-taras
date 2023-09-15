
export const downloadTask = (information) => {
  const data = []

  for (const item of information) {
    data.push(
      {
        Tarea: item.titleTask,
        Horadeinicio: item.initTimeFormat,
        Horadefinalización: item.finishTimeFormat,
        Tiempototal: item.totalTime
      }
    )
  }
  return data
}

export const downloadHistoryTask = (information) => {

  const data = []

  for (let i = 0; i < information.length; i++) {
    let fecha = information[i].date
    let totalDeldia = information[i].totaltimeDay
    for (let j = 0; j < information[i].tarea.length; j++) {
      let task = information[i].tarea
      data.push(
        {
          Fecha: new Date(fecha).toLocaleDateString("es"),
          Tarea: task[j].titleTask,
          Tiempodetarea: task[j].totalTime,
          Totaldeldia: totalDeldia
        }
      )
    }
  }

  return data
}