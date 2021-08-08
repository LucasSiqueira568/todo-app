import "./erro.scss"
import React from 'react'
import { Link } from "react-router-dom"

export default function Erro(props) {
    return (
        <div className="erro">
            <h1>!404</h1>
            <h1>Desculpe, a página que você buscou está indisponível</h1>
            <p>Por favor, fique a vontade para buscar outras sessões em nosso site.</p>
            <p>Por favor, escolha a opção abaixo para voltar a tela inicial.</p>
            <Link to="/" >ME LEVE PARA A PÁGINA INICIAL</Link>
        </div>
    )
}
