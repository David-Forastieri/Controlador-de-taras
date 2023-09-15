import { useEffect, useState } from "react";
import InputTask from "../../components/InputAddTask/InputTask";
import TableTask from "../../components/TableTask/TableTask";
import { useDispatch, useSelector } from 'react-redux'
import { IndexContainer, TitleApp } from "./style";
import TableHistory from "../../components/TableHistory/TableHistory";
import InputUser from "../../components/InputUser/InputUser";
import { changeUser } from "../../StoreReducer/actions";

//--PANTALLA DE INICIO DE LA APLICACION
const IndexApp = () => {

  const dispatch = useDispatch()
  const AllTaskDB = useSelector(state => state.taskReducer.allTask)
  const User = useSelector(state => state.userReducer.user)
  const [allTasks, setAllTasks] = useState([])
  const [historyView, setHistoryview] = useState(false)

  useEffect(() => {
    allTasks.length < 1 && setAllTasks(AllTaskDB)
  }, [allTasks.length, AllTaskDB])

  const changeviewhistory = (view) => setHistoryview(view)

  return (
    <IndexContainer>
      <img src="https://grupopenna.com.ar/images/logoi.png" alt="" />
      <TitleApp>Listado de Tareas</TitleApp>
      {User === "" ?
        <InputUser />
        :
        <>
          <div>
            <span>Usuario N°: {User}</span>
            <button onClick={() => dispatch(changeUser())}>Cambiar de usuario</button>
          </div>
          <div>
            <InputTask changeviewhistory={changeviewhistory} user={User} AllTaskDB={AllTaskDB} />
          </div>
          {!historyView &&
            <div>
              <TableTask AllTaskDB={AllTaskDB} />
            </div>
          }
          {historyView &&
            <div>
              <TableHistory AllTaskDB={AllTaskDB} />
            </div>
          }
        </>
      }
    </IndexContainer>
  );
}

export default IndexApp;
