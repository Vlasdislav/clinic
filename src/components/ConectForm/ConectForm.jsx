import React from "react"
import InputText from "../InputText/InputText"
import InputTextMessage from "../InputText/InputTextMessage"
import SubmitMessage from "../SubmitMessage/SubmitMessage"

const ConectForm = () => {
    return (
        <form className="section-content" action="">
            <h1 className="section-title">Мы свяжемся с Вами</h1>
            <div className="block-inputs">
                <InputText helper="Имя" type="text" />
                <InputText helper="Электронная почта" type="mail" /> 
                <InputText helper="Телефон" type="tel" />
                <InputTextMessage helper="Сообщение" />
            </div>
            <SubmitMessage />
        </form>
    )
}

export default ConectForm;