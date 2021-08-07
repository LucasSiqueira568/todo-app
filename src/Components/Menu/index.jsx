import './Menu.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return(
        <div className="Menu">
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/favorites">Favoritos</Link></li>
                <li><Link to="/deleted">Excuídos</Link></li>
            </ul>
        </div>
    )
}