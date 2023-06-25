import React from "react"
import "./HeaderPage.css"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const HeaderPage = ({ titlePage, descriptionPage }) => {
    const { serviceName } = useParams(),
          { pathname } = useLocation(),
          bgClass = (pathname === "/about" ? "about" : serviceName);
          
    return (
        <section className={`header-page ${bgClass}`}>
            <div className="container">
                <h1 className="title-page">{titlePage}</h1>
                <h3 className="description-page">{descriptionPage}</h3>
            </div>
        </section>
    )
}

export default HeaderPage;