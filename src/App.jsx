import './App.css'
import React from 'react'

import Menu from './Components/Menu'
import Home from './Components/Home'
import Detalhe from './Components/Detalhe'


export default function App() {
    return(
        <div className="App">
            <Menu />
            <Home titulo="Principais Projetos" color="#FFF" fontSize="1.8rem"/>
            <Detalhe/>
        </div>
    )
}