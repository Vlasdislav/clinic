import React from "react"
import "./Button.css"
import { HashLink as Link } from "react-router-hash-link"

const Button = ({ func, link }) => <Link to={link} className="button">{func}</Link>

export default Button;