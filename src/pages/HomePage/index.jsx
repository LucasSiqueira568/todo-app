import "./style.scss"
import React from "react"


import Home from '../Home'
import Menu from '../../Components/Menu'
import Detalhe from '../Detalhe'

export default function HomePage() {
    return(
        <div className="HomePage">
            <Home titulo="Principais Tarefas"/>
            <Menu />
            <Detalhe />
        </div>

    )
}