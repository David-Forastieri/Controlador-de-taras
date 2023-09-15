import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ButtonEdit, ButtonIconEdit, EditIcon, FinisButton, InputEdit, InputEditMain, Tablecontainer, } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { editTitle, finishTask } from '../../StoreReducer/actions';
import EditImage from "../../assets/editar.png"
//import { Botones } from '../../containers/indexApp/style';
import DownloadCSV from './../../containers/DownloadCSV/DownloadCSV';

const TableTask = ({ AllTaskDB }) => {

  const dispatch = useDispatch()
  const User = useSelector(state => state.userReducer.user)
  const [task, setTask] = useState([])
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState("")
  const [idEdit, setIdEdit] = useState(null)

  const headersTab = ["Tarea", "Hora de inicio", "Hora de finalización", "Tiempo total"]

  const handlerchange = e => setText(e.target.value)

  const openInput = (id, titleTask) => {
    setEdit(!edit);
    setText(titleTask)
    setIdEdit(id)
  }

  const changeTitle = (id, titleTask) => {
    text === "" ? dispatch(editTitle(titleTask, id, User)) : dispatch(editTitle(text, id, User))
    setText("")
    setEdit(false)
  }

  useEffect(() => {
    setTask(AllTaskDB)
  }, [AllTaskDB]);

  return (
    <>
      <Tablecontainer>
        <table>
          <thead>
            <tr>
              {headersTab.map((headerName) => <th className='celdas' key={headerName}>{headerName}</th>)}
              <th className='celdaEdit'>Editar</th>
              <th className='celdaFinishTask'></th>
            </tr>
          </thead>
          <tbody>
            {task.length > 0 &&
              task.map((tsk) =>
                <tr key={tsk.id}>
                  {edit & idEdit === tsk.id ?
                    <td className='celdasItem'>
                      <InputEditMain>
                        <InputEdit type='text' value={text} onChange={(e) => handlerchange(e)} />
                        <ButtonEdit onClick={() => changeTitle(tsk.id, tsk.titleTask)} >OK</ButtonEdit>
                      </InputEditMain>
                    </td> :
                    <td className='celdasItem'>{tsk.titleTask}</td>
                  }
                  <td className='celdasItem'>{tsk.initTimeFormat}</td>
                  <td className='celdasItem'>{tsk.finishTimeFormat}</td>
                  <td className='celdasItem'>{tsk.totalTime}</td>
                  <td className='celdasItem'>
                    <ButtonIconEdit onClick={() => openInput(tsk.id, tsk.titleTask)}>
                      <EditIcon src={EditImage} alt="" />
                    </ButtonIconEdit>
                  </td>
                  <td className='celdaItemFinish'>
                    {tsk.finishTimeFormat === '--' ?
                      <FinisButton onClick={() => dispatch(finishTask(tsk.id, User))}>Finalizar</FinisButton>
                      : null
                    }
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </Tablecontainer>
      <>
        <DownloadCSV information={task} />
      </>
    </>
  )
}

TableTask.propTypes = {
  AllTaskDB: PropTypes.array
};

export default TableTask
