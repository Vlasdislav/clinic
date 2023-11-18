import React from "react"
import "./InputText.css"

const InputText = ({ helper, type }) => {
    return (
        <div class="form-item">
            <input type={type} class="form-input" required />
            <label class="form-label">{helper}</label>
        </div>
    )
}

export default InputText;