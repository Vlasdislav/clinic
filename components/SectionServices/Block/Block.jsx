import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Block.css"

const Block = ({ icon, blockTitle, blockText, service }) => {
    return (
        <div className="block">
            <img src={icon} alt="icon" className="icon"/>
            <h3 className="block-title">{blockTitle}</h3>
            <p className="block-text">{blockText}</p>
            <Link to={service} className="more">подробнее</Link>
        </div>
    )
}

export default Block;