import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.scss'

const NotFound = () => {
    return (

        <article id="not_found">
            <h1>404 Page not found</h1>
            <Link to="/">Back to home page</Link>
        </article>
    )
}

export default NotFound