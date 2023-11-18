import React from "react"
import Slide from "./Slide/Slide"
import "./Slider.css"
import Carousel from "react-elastic-carousel"
import { consts } from "react-elastic-carousel/dist"
import img1 from "../../assets/medical.svg"
import img2 from "../../assets/covid_19.svg"
import img3 from "../../assets/fitness.svg"
import huber from "../../assets/video/huber.mp4"
import covid from "../../assets/video/covid.mp4"
import huberSport from "../../assets/video/huberSport.mp4"

const Slider = () => {

    const myArrow = ({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? "prev" : "next"
      return <button className={pointer} onClick={onClick} disabled={isEdge}></button>
    }
    
    return (
        <section className="slider-section container">
            <Carousel itemsToShow={1} initialActiveIndex={1} enableMouseSwipe={0} renderArrow={myArrow}>
                <Slide video={huberSport} linkMore="./services/sport" title="Спортивная подготовка" description="Нейрофизическая тренировкаи оценка с БОС. Создание индивидуальных программ тренировок с учетом специфики и функционального состояния спортсменов любых видов спорта." img={img3} />
                <Slide video={huber} linkMore="./about" link="https://huber360.ru/" title="Клиника адаптационной медицины" description="В своих исследованиях мы применяем новейшие технологиии нейрофизических тренеровок и оценки при помощи умных тренажёров" textMain="HUBER 360" img={img1} />
                <Slide video={covid} linkMore="./covid-19" link="https://covid19.rosminzdrav.ru/?gclid=Cj0KCQiAh4j-BRCsARIsAGeV12ALZOQLsR_BVma76FVKxOerio1w6KTwz9jYIkWTfyigke08TZ5qFBwaAtI6EALw_wcB" title="Адаптация после коронавируса" description="Механотерапевтическое оборудование для реабилитации после" textMain="COVID-19" img={img2} />
            </Carousel>
        </section>
    )
}

export default Slider;
