import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import ConectForm from '../components/ConectForm/ConectForm'
import Message from '../components/Message/Message'
import Modal from '../components/Modal/Modal'

const ModalContext = createContext({
    opened: false,
    open: () => {},
    close: () => {},
});

export const ModalContextProvider = ({ children }) => {
    const [opened, setOpened] = useState(false);
    const { pathname } = useLocation();
    useEffect(close, [pathname]);

    function open() {
        setOpened(true);
    }

    function close() {
        setOpened(false);
    }

    return (
        <ModalContext.Provider value={{open, close, opened}}>
            {children}
            {opened && <Modal> {(pathname === "/") ? <Message /> : <ConectForm />} </Modal>}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    return useContext(ModalContext);
};
