import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { downloadHistoryTask } from '../../utils/dataToDownload';
import { Botones } from '../indexApp/style';
import Papa from 'papaparse'
import { saveAs } from 'file-saver'
import { useSelector } from 'react-redux';

const DownloadHistory = ({ information }) => {

  const User = useSelector(state => state.userReducer.user)

  useEffect(() => {
  }, [])

  const convertToCSV = async () => {
    const csv = await Papa.unparse(downloadHistoryTask(information));
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `taskHistory${User}.csv`);
  };

  return (
    <Botones onClick={() => convertToCSV()}>
      Descargar CSV
    </Botones>
  )
}

DownloadHistory.propTypes = {
  information: PropTypes.array
};

export default DownloadHistory
