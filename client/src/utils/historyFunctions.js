
//--DE ESTA FUNCION OBTENGO LAS FECHAS DE LOS DIAS REGISTRADOS
const historyDays = (taskList) => {

  const days = []

  for (let i = 0; i < taskList.length; i++) {
    if (days.length === 0) {
      days.push(taskList[0].initTime)
    } else {
      if (new Date(taskList[i].initTime).toLocaleDateString("es") !== new Date(days[days.length - 1]).toLocaleDateString("es")) {
        days.push(taskList[i].initTime)
      }
    }
  }
  return days
}

//--------------------------------------------------------------------------------------------------------------------------------------------
//--DE ESTA FUNCION SE OBTIENE EL TOTAL DE HORAS DE LAS TAREAS DE UN MISMO DIA
const historyTotalTime = (taskList) => {

  let sumTime = 0

  for (let i = 0; i < taskList.length; i++) {
    let date1 = new Date(taskList[i].initTime)
    let date2 = new Date(taskList[i].finishTime)
    let suma = Math.abs(date1 - date2)
    sumTime += parseInt(suma)
  }

  const seconds = Math.floor(sumTime / 1000) % 60;
  const minutes = Math.floor(sumTime / (1000 * 60)) % 60;
  const hours = Math.floor(sumTime / (1000 * 60 * 60));

  let timeTotal = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  return timeTotal
}

//------------------------------------------------------------------------------------------------------------------------------------------
export const historyAllTask = (taskList) => {

  //--FILTRA SOLO LAS TAREAS QUE ESTEN TERMINADAS, PARA TRABAJAR CON ELLAS
  let tasksFinish = taskList.filter(ts => ts.finishTime !== "--")

  //--SE CREAN OBJETOS DE TIPO TASK EN EL NUEVO ARRAY Y SE ASIGNA SU VALOR A CADA PRO
  let nuevoArray = []

  //--EJECUTA LA FUNCION PARA OBTENER LAS FECHAS DE LAS TAREAS REALIZADAS
  let fechas = historyDays(tasksFinish)

  //--AGREGO AL NUEVO ARRAY UN OBJETO CON ID Y DATE QUE SERIAN LAS FECHAS TRAIDAS DE LA FUNCION ANTERIOR
  for (let i = 0; i < fechas.length; i++) {
    nuevoArray[i] = {
      id: fechas[i],
      date: fechas[i]
    }
  }

  //--GENERO UN NUEVO ARRAY AGREGANDO COMO IBJETOS LAS TAREAS FILTRADAS SEGUN LA FECHA DE REALIZACION
  //--Y ADEMAS AGREGO EL TOTAL DEL TIEMPO OCUPADO DEL DIA
  for (let i = 0; i < nuevoArray.length; i++) {
    //--ACA FILTRO LAS TAREAS REALIZADAS EL MISMO DIA
    let filtroTarea = tasksFinish.filter((ts) => new Date(ts.initTime).toLocaleDateString("es") === new Date(nuevoArray[i].date).toLocaleDateString("es"))

    //--ESTA FUNCION OBTIENE EL TOTAL DE HORAS DE LAS TAREAS DE UN DIA COMPLETO
    let totaltimeDay = historyTotalTime(filtroTarea)

    nuevoArray[i] = { ...nuevoArray[i], tarea: filtroTarea }
    nuevoArray[i] = { ...nuevoArray[i], totaltimeDay }
  }

  return nuevoArray
}