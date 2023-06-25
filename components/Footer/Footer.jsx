import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Footer.css"
import instagram from "../../assets/social/instagram.svg"
import telegram from "../../assets/social/telegram.svg"
import whatsapp from "../../assets/social/whatsapp.svg"
import youtube from "../../assets/social/youtube.svg"
import logo from "./logo.svg";

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-main">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <section className="footer-content">
                    <nav className="footer-navigation">
                        <h3 className="footer-title">Услуги</h3>
                        <span className="nav-elem"><Link to="/services/cosmetology" className="nav-elem">Отделение косметологии</Link></span>
                        <span className="nav-elem"><Link to="/services/sport" className="nav-elem">ЛФК и спортивная медицина</Link></span>
                        <span className="nav-elem"><Link to="/services/monotherapy" className="nav-elem">Мануальная терапия</Link></span>
                        <span className="nav-elem"><Link to="/services/neurology" className="nav-elem">Отделение неврологии</Link></span>
                        <span className="nav-elem"><Link to="/services/plasmolifting" className="nav-elem">Плазмолифтинг</Link></span>
                        <span className="nav-elem"><Link to="/services/rheumatology" className="nav-elem">Ревматология</Link></span>
                        <span className="nav-elem"><Link to="/services/therapy" className="nav-elem">Терапия</Link></span>
                        <span className="nav-elem"><Link to="/services/traumatology_ortopedics" className="nav-elem">Травмотология - ортопедия</Link></span>
                        <span className="nav-elem"><Link to="/services/surgery" className="nav-elem">Хирургия</Link></span>
                    </nav>
                    <nav className="footer-navigation">
                        <h3 className="footer-title">О компании</h3>
                        <span className="nav-elem"><Link to="/about" className="nav-elem">О нас</Link></span>
                        <span className="nav-elem"><Link to="/contacts" className="nav-elem">Контакты</Link></span>
                        <span className="nav-elem"><a href="https://huber360.ru/" className="nav-elem" target="_blank">HUBER</a></span>
                        <span className="nav-elem"><Link to="/FAQ" className="nav-elem">FAQ</Link></span>
                    </nav>
                    <nav className="footer-navigation">
                        <h3 className="footer-title">Контактная информация</h3>
                        <span className="nav-elem"><a href="tel:+78442979700" className="nav-elem">+7 8442 97-97-00</a></span>
                        <span className="nav-elem"><a href="mailto:kamvlg2019@yandex.ru" className="nav-elem">kamvlg2019@yandex.ru</a></span>
                        <nav className="social-links">
                            <span className="social-link"><a href="#"><img src={instagram} alt="instagram"/></a></span>
                            <span className="social-link"><a href="#"><img src={telegram} alt="telegram"/></a></span>
                            <span className="social-link"><a href="#"><img src={whatsapp} alt="whatsapp"/></a></span>
                            <span className="social-link"><a href="#"><img src={youtube} alt="youtube"/></a></span>
                        </nav>
                    </nav>
                </section>
            </div>
            <div className="footer-footer">
                <span className="nav-elem">© 2020 Клиника адаптационной медицины. Все права защищены.</span>
                <div className="legally-block">
                    <span className="nav-elem">ОГРН: 1193443008065</span>
                    <span className="nav-elem">ИНН: 3460076406</span>
                    <span className="nav-elem">КПП: 346001001</span>
                    <span className="nav-elem">ОКПО: 40448207</span>
                    <span className="nav-elem">ОКТМО: 18701000001</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;