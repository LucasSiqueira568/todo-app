import './Menu.css'
import React from 'react'

export default function Menu(props) {
    return(
        <div className="Menu">
        
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Todos</a></li>
                <li><a href="/">Favoritos</a></li>
                <li><a href="/">Excuídos</a></li>
            </ul>
        </div>
    )
}