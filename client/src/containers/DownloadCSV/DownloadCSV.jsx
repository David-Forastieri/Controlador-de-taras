import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { downloadTask } from '../../utils/dataToDownload';
import { Botones } from '../indexApp/style';
import Papa from 'papaparse'
import { saveAs } from 'file-saver'
import { useSelector } from 'react-redux';

//--FUNCION GENERADORA DE ARCHIVO PARA DESCARGAR EN FORMATO CSV
const DownloadCSV = ({ information }) => {

  const User = useSelector(state => state.userReducer.user)

  useEffect(() => {
  }, [])

  //--CONVIERTE LA INFORMACION DE LA TABLA GENERAL PARA LUEGO SER DESCARGADA EN FORMATO CSV
  const convertToCSV = async () => {
    const csv = await Papa.unparse(downloadTask(information));
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `task${User}.csv`);
  };

  return (
    <Botones onClick={() => convertToCSV()}>
      Descargar CSV
    </Botones>
  )
}

DownloadCSV.propTypes = {
  information: PropTypes.array
};

export default DownloadCSV
