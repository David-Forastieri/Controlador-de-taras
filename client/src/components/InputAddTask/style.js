import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const LabelInput = styled.label`
font-size: 15px;
font-weight: 500;
margin: 0px;
`

const InputText = styled.input`
background-color: #fff;
color: #000;
font-size: 15px;
height: 25px;
width: 100vh;
margin: 8px 0;
border: none;
border-radius: 3px;
`
const ButtonContain = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const ButtonAddTask = styled.button`
background-color: blue;
height: 30px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
border: none;
`

const ButtonHistory = styled.button`
background-color: gray;
height: 30px;
border-radius: 3px;
border: none;
display: flex;
margin-left: 20px;
justify-content: center;
align-items: center;
font-weight: 400;
`

export {
  MainContainer,
  LabelInput,
  InputText,
  ButtonContain,
  ButtonAddTask,
  ButtonHistory
}

