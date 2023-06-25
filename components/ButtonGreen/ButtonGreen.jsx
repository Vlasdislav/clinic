import React from "react"
import "./ButtonGreen.css"
import { Link } from "react-router-dom"

const ButtonGreen = ({ func, link }) => <Link to={link} className="button-green">{func}</Link>

export default ButtonGreen;