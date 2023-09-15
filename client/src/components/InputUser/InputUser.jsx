import { useState } from "react";
import { ButtonAddUser, InputText, LabelInput, MainContainer } from "./style";
import { useDispatch } from 'react-redux';
import { saveUser } from "../../StoreReducer/actions";

const InputUser = () => {

  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handlerchange = e => setText(e.target.value)

  //--ENVIA EL NUMERO DE DNI DEL USUARIO Y VALIDA QUE TENGA UN FORMATO CORRECTO
  const handlerUser = () => {
    if (text === "" || text.length < 7 || text.length > 8 || !/^[0-9]+$/.test(text)) {
      alert("Es obligatorio completar los datos de manera correcta")
      return
    } else {
      dispatch(saveUser(text))
      setText("")
    }
  }

  return (
    <MainContainer>
      <LabelInput>Por favor coloque su número de DNI</LabelInput>
      <InputText type="text" value={text} onChange={(e) => handlerchange(e)} placeholder="xxxxxxxxx" />
      <ButtonAddUser onClick={() => handlerUser()}>Registrar Usuario</ButtonAddUser>
    </MainContainer>
  );
}

export default InputUser;
