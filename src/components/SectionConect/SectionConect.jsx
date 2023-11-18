import React from "react"
import img from "../../assets/telemedicine.svg"
import ConectForm from "../ConectForm/ConectForm"

const SectionConect = () => {
    return (
        <section className="section container" id="conect">
            <img src={img} alt="img"/>
            <ConectForm />
        </section>
    )
}

export default SectionConect;

/* type="email" */  