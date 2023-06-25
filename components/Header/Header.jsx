import React from "react"
import { useLocation } from "react-router-dom"
import "./Header.css"
import { HashLink as Link } from "react-router-hash-link"
import logo from "../../logo.svg"
import { useModalContext } from "../../context/ModalContext"

const Header = () => {
    const {
        open
    } = useModalContext();

    const { pathname } = useLocation();
    const getUrl = (url) => {
        if (pathname === "/")
            return `#${url}`
        else return `/${url}`;
    }
    
    return (
        <header className="header">
            <div className="container">
                <Link to="/" title="Клиника адаптационной медицины"><img src={logo} alt="logo"/></Link>
                <nav className="menu">
                    <Link to="/" className="menu-link">Главная</Link>
                    <Link to={getUrl("about")} className="menu-link">О нас</Link>
                    <Link to={getUrl("services")} className="menu-link">Услуги</Link>
                    <Link to={getUrl("contacts")} className="menu-link">Контакты</Link>
                    {
                        (pathname === "/" ? <Link to={getUrl("conect")} className="button-primery">Онлайн консультация</Link> : <Link onClick={open} className="button-primery">Онлайн консультация</Link>)
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header;