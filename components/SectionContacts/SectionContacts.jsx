import React from "react"
import "./SectionContacts.css"
import img from "../../assets/map.svg"
import ButtonGreen from "../ButtonGreen/ButtonGreen"
import Button from "../Button/Button"
import { useLocation } from "react-router-dom"

const SectionContacts = () => {
    const { pathname } = useLocation();
    return  (
        <section className="section container" id="contacts">
            <div className="contacts-content">
                <h1 className="section-title">Контакты</h1>
                <span className="info-link"><a href="tel:88442979700" className="info telephon">+7 8442 97-97-00</a></span>
                <span className="info clock">Пн-пт 08:00–20:00; сб 08:00–16:00</span>
                <span className="info mark">Волгоград, Пугачёвская ул., 7Г</span>
                <span className="info-link"><a href="mailto:kamvlg2019@yandex.ru" className="info mail">kamvlg2019@yandex.ru</a></span>
                {
                    (pathname === "/" ? 
                    <div className="buttons">
                        <ButtonGreen link="/contacts" func="Подробнее" />
                        <Button link="#conect" func="Онлайн консультация" />
                    </div> : "")
                }
            </div>
            <img src={img} alt="img"/>
        </section>
    )
}

export default SectionContacts;