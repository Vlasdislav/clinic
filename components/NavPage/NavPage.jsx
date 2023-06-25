import React from "react"
import "./NavPage.css"
import { HashLink as Link } from "react-router-hash-link"
import { useParams } from "react-router-dom"
import ads from "../../assets/ads.jpg"
import services from "../../db/services.json"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import about from "../../db/about.json"

const NavPage = () => {
    const { serviceName } = useParams(),
          { pathname } = useLocation(),
    { article } = (pathname === "/about" ? about : services[serviceName]);
    
    let index = 0;
    return (
        <nav className="nav-page">
            <ul className="nav-panel">
                {
                    article.map(({ paragraph, id }) => <span className="nav-elem-content"><Link className="nav-link-content" to={`#${id}_${++index}`}>{paragraph}</Link></span>)
                }
                <img className="ads" src={ads} alt="Объявление"/>
            </ul>
        </nav>
    )
}

export default NavPage;