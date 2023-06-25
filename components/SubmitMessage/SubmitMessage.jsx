import React from "react"
import { useModalContext } from "../../context/ModalContext"
import "./SubmitMessage.css"

const SubmitMessage = () => { 
    const { open } = useModalContext();
    return <button className="submit-message" type="submit" onSubmit={open}>Отправить</button>
}  

export default SubmitMessage;