import styled from 'styled-components'

const Tablecontainer = styled.div`
  min-height: auto;
  max-height: 300px;
  min-width: 900px;
  margin: 20px 1px;
  width: auto;
  //padding: 5px;
  overflow: auto;

  .celdas{
    min-width: 237px;
    border-bottom: solid 2px #fff;
    padding:5px;
    font-weight: 500;
  }

  .celdasItem{
    border-bottom: solid 0.1px #878787;
    padding: 5px 0px;
  }

  .celdasItemTD{
    display: block;
    border-bottom: solid 0.1px #878787;
    padding: 5px 0px;
  }
  
  .celdaEdit{
    border-bottom: solid 2px #fff;
  }

  .celdaFinishTask{
    width: 100px;
    border-bottom: solid 2px #fff;
  }

  .celdaItemFinish{
    border-bottom: solid 0.1px #878787;
    padding: 0px 10px;
  }
`
const TableBlock = styled.tr`
border-bottom: solid 2px #fff;
`
const FinisButton = styled.button`
background-color: red;
display: flex;
align-items: center;
justify-content: center;
font-size: 13px;
color: #fff;
height: 19px;
width: auto;
//padding: 5px 2px;
border-radius: 1px;
cursor: pointer;

&:hover{
  border: solid 1px red;
}
`

const ButtonIconEdit = styled.button`
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
height: 17px;
width: 10px;
cursor: pointer;
`
const EditIcon = styled.img`
height: 16px;
width: 16px;
`
const InputEditMain = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border: none;
`
const InputEdit = styled.input`
height: 19px;
width: auto;
background-color: #fff;
color: #000;
border: none;
`
const ButtonEdit = styled.button`
height: 13px;
width: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: green;
`

export {
  Tablecontainer,
  TableBlock,
  FinisButton,
  ButtonIconEdit,
  EditIcon,
  InputEditMain,
  InputEdit,
  ButtonEdit
}