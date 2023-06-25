import React from "react"
import "./ContactsPage.css"
import Maps from "../../components/Maps/Maps"
import NavLine from "../../components/NavLine/NavLine"
import SectionContacts from "../../components/SectionContacts/SectionContacts"
import SectionConect from "../../components/SectionConect/SectionConect"

const ContactsPage = () => {
    return (
        <main className="main">
            <Maps />
            <NavLine />
            <div className="container">
                <SectionContacts />
                <SectionConect />
            </div>
        </main>
    )
}

export default ContactsPage;