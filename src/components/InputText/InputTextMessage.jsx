import React from "react"
import "./InputText.css"

const InputTextMessage = ({ helper }) => {
    return (
        <div class="form-item">
            <textarea type="text" class="form-input form-message" required />
            <label class="form-label">{helper}</label>
        </div>
    )
}

export default InputTextMessage;