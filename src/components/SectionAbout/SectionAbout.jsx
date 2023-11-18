import React from "react"
import Button from "../Button/Button"
import ButtonGreen from "../ButtonGreen/ButtonGreen"
import "./SectionAbout.css"
import img from "../../assets/science.svg"

const SectionAbout = () => {
    return (
        <section className="section container" id="about">
            <img src={img} alt="image"/>
            <div className="section-content">
                <h1 className="section-title">Немного о нас</h1>
                <p className="section-text">Повседневная практика показывает, что консультация с широким активом способствует повышению качества как самодостаточных, так и внешне зависимых концептуальных решений. В рамках спецификации современных стандартов, непосредственные участники технического прогресса могут быть функционально разнесены на независимые элементы. Приятно, граждане, наблюдать, как многие известные личности, превозмогая сложившуюся непростую экономическую ситуацию, объединены в целые кластеры себе подобных.</p>
                <div className="buttons">
                    <ButtonGreen link="/about" func="Подробнее" />
                    <Button link="#contacts" func="Контакты" />
                </div>
            </div>
        </section>
    )
}

export default SectionAbout;