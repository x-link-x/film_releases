import React from "react"
import "./Film.css"
const Film = ({ children, url }) => {

    return (
        <li><a href={url}>{children}</a></li>
    )
}

export default Film;