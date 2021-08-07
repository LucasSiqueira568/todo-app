import "./style.scss"
import React from "react"


import Home from '../Home'
import Menu from '../Menu'
import Detalhe from '../Detalhe'

export default function HomePage() {
    return(
        <div className="HomePage">
            <Home />
            <Menu />
            <Detalhe />
        </div>

    )
}