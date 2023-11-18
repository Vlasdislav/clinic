import React from "react"
import "./ArticlePage.css"

const ArticlePage = ({ title, article, id }) => {
    return (
        <section className="article" id={id}>
            <h2 className="article-title">{title}</h2>
            <p className="article-content">{article}</p>
        </section>
    )
}

export default ArticlePage; 