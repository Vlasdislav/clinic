import React from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import InnerPage from "../../pages/InnerPage/InnerPage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Error from "../Error/Error"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import ContactsPage from "../../pages/ContactsPage/ContactsPage"
import { ModalContextProvider } from "../../context/ModalContext"
import SectionServices from "../SectionServices/SectionServices"
import SectionConect from "../SectionConect/SectionConect"

const App = () => {
  return (
    <Router>
      <ModalContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/services/:serviceName" exact component={InnerPage} />
            <Route path="/contacts" exact component={ContactsPage} />
            <Route path="/about" exact component={InnerPage} />
            <Route path="/services" exact component={SectionServices} />
            <Route path="/conect" exact component={SectionConect} />
            <Route component={Error} />
          </Switch>
          <Footer />
          <ScrollToTop />
      </ModalContextProvider>
    </Router>
  )
}

export default App;
