import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Tablecontainer } from './style';
import { historyAllTask } from '../../utils/historyFunctions';
import DownloadHistory from '../../containers/DownloadCSV/DownloadHistory';

const TableHistory = ({ AllTaskDB }) => {

  //--TABLA DE VISUALIZACION DE HISTORIAL DE TREAS

  const [task, setTask] = useState([])

  const headersTab = ["Fecha", "Tarea", "Tiempo total", "Total del dia"]

  useEffect(() => {
    setTask(historyAllTask(AllTaskDB))
  }, [AllTaskDB]);

  return (
    <>
      <Tablecontainer>
        <table>
          <thead>
            <tr>
              {headersTab.map(headerName => <th className='celdas' key={headerName}>{headerName}</th>)}
            </tr>
          </thead>
          <tbody>
            {task.length > 0 &&
              task.map((tsk) =>
                <tr key={tsk.id}>
                  <td className='celdasItem'>{new Date(tsk.date).toLocaleDateString("es")}</td>
                  <td>
                    {tsk.tarea.map((ts) =>
                      <span key={ts.id} className='celdasItemTD'>{ts.titleTask}</span>
                    )}
                  </td>
                  <td>
                    {tsk.tarea.map((ts) =>
                      <span key={ts.id} className='celdasItemTD'>{ts.totalTime}</span>
                    )}
                  </td>
                  <td className='celdasItem'>{tsk.totaltimeDay}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </Tablecontainer>
      <>
        <DownloadHistory information={task} />
      </>
    </>
  )
}

TableHistory.propTypes = {
  AllTaskDB: PropTypes.array,
};

export default TableHistory
