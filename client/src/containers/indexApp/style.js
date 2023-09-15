import styled from 'styled-components'

const IndexContainer = styled.div`
background-color: #000;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
box-sizing: border-box;
min-width: 1000px;
`

const TitleApp = styled.h2`
color: #fff;
font-weight: 400;
font-size: 30px;
`

const Botones = styled.button`
background-color:green;
height: 30px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 400;
`

export {
  IndexContainer,
  TitleApp,
  Botones
}