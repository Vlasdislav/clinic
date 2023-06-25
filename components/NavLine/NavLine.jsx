import React from "react"
import "./NavLine.css";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import services from "../../db/services.json";

const NavLine = () => {
    const { pathname } = useLocation();
    let nav = [], str = "", path = pathname + "/";
    for (let char of path) {
        if (char !== "/")
            str += char;
        else {
            nav.push(str);
            str = "";
        }
    }
    let name = "Главная"
    return (
        <nav className="navigation">
            <div className="container">
                {
                    nav.map(elem => {
                        let flag = false;
                        if (nav[nav.length - 1] === elem)
                            flag = true;
                        if (flag && nav[1] === "services") {
                            name = services[elem].title;
                            elem = `services/${elem}`;
                        }
                        switch (elem) {
                            case "services": name = "Услуги";
                            break;
                            case "contacts": name = "Контакты";
                            break;
                            case "about": name = "О нас";
                            break;
                        }
                        return (
                            <>
                                <Link to={`/${elem}`} className={flag ? "nav-line-link text-main" : "nav-line-link"}>{name}</Link>
                                <span> / </span>
                            </>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default NavLine;