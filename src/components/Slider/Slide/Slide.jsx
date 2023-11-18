import React from "react"
import ButtonGreen from "../../ButtonGreen/ButtonGreen"
import ButtonWatch from "../../ButtonWatch/ButtonWatch"
import "./Slide.css"

const Slide = ({ title, description, link, textMain, img, linkMore, video }) => {
    return (
        <section className="slide">
            <div className="slide-content">
                <h1 className="slide-title">{title}</h1>
                <p className="slide-description">{description} <a href={link} target="_blank" className="text-main">{textMain}</a></p>
                <div className="slide-buttons">
                    <ButtonGreen func="Подробнее" link={linkMore} />
                    <ButtonWatch video={video} />
                </div>
            </div>
            <img className="img" src={img} alt="image" />
        </section>
    );
}

export default Slide;