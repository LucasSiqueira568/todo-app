import "./style.scss"
import React from "react"


import Todo from "../Todo"
import Menu from '../../Components/Menu'

export default function TodoPage() {
    return(
        <div className="TodoPage">
            <Todo titulo="Todas as tarefas" />
            <Menu />
        </div>

    )
}