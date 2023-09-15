import { useState } from "react"
import PropTypes from 'prop-types';
import { ButtonAddTask, ButtonContain, ButtonHistory, InputText, LabelInput, MainContainer } from "./style"
import { useDispatch } from 'react-redux';
import { addNewTask } from "../../StoreReducer/actions";

const InputTask = ({ changeviewhistory, user, AllTaskDB }) => {

  const dispatch = useDispatch()

  const [text, setText] = useState("")
  const [buttonAddView, setButtonAddView] = useState(true)

  let lastIndex = AllTaskDB.length - 1

  //--CAPTURA EL TEXTO INGRESADO POR EL USUARIO
  const handlerchange = e => setText(e.target.value)

  //--ENVIA EL TITULO DE LA TAREA AL SERVIDOR PARA SER GUARDADA
  //--ADEMAS VALIDAD QUE NO SE ENVIE POR ERROR UN VALOR VACIO
  const sendNewTask = () => {
    if (text === "") return alert("Debe agregar una tarea para continuar")
    if (lastIndex === -1) {
      dispatch(addNewTask(text, user))
      setText("")
      return
    }
    if (lastIndex >= 0) {
      if (AllTaskDB[lastIndex].finishTime === "--") {
        dispatch(addNewTask(text, user, AllTaskDB[lastIndex].id))
        setText("")
        return
      } else {
        dispatch(addNewTask(text, user))
        setText("")
        return
      }
    }
  }

  const changeOfButtons = (value1, value2) => {
    changeviewhistory(value1)
    setButtonAddView(value2)
  }

  return (
    <MainContainer>
      <LabelInput>Nombre de la tarea</LabelInput>
      <InputText type="text" value={text} onChange={(e) => handlerchange(e)} />
      <ButtonContain>
        {buttonAddView ?
          <ButtonAddTask onClick={() => sendNewTask()} >Agregar Tarea</ButtonAddTask>
          :
          <ButtonAddTask onClick={() => changeOfButtons(false, true)} >Ver las Tareas</ButtonAddTask>
        }
        <ButtonHistory onClick={() => changeOfButtons(true, false)}>Historial de Tareas</ButtonHistory>
      </ButtonContain>
    </MainContainer>
  )
}

InputTask.propTypes = {
  changeviewhistory: PropTypes.func,
  user: PropTypes.string,
  AllTaskDB: PropTypes.array
};

export default InputTask
