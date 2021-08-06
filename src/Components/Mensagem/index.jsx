import './Mensagem.css'
import React from 'react'

export default function Mensagem(props) {
    return (
        <div className="container">
            <div className="boxMsg">
                <p><i class="fal fa-trash"></i></p>
                <h1>Excluir Tarefa</h1>
                <p>Deseja mesmo excluir essa terefa? <br/> Ela será apagada para sempre.</p>
                <div className="buttons">
                    <button>CANCELAR</button>
                    <button>EXCLUIR</button>
                </div>
            </div>
        </div>
    )
}
