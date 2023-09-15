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

const ButtonAddUser = styled.button`
background-color: blue;
height: 30px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
border: none;
`

export {
  MainContainer,
  LabelInput,
  InputText,
  ButtonAddUser
}