import './Todo.scss'
import React from 'react'
import data from '../../data/tarefas.json'

export default function Todo(props) {
    const tarefas = data.map((tarefa) => {
        return (
            <tr key={tarefa.id}>
                <td>{tarefa.id}</td>
                <td>{tarefa.nome}</td>
                <td>{tarefa.tipo}</td>
                <td>{tarefa.data}</td>
                <td>R$ {tarefa.valor.toFixed(2).replace('.', ',')}</td>
            </tr>

        );


    });

    const styleColor = {
        color: props.color,
        fontSize: props.fontSize,
    }
    return (
        <div className="Todo">
            <div className="tituloHome">
                <h1 style={styleColor}>{props.titulo}</h1>
                <hr />
            </div>
            <table className="tableProjects" border={1} frame="void" rules="rows">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>
                            <select id="tipo">
                                <option value="">Tipo</option>
                                <option value="">Diário</option>
                                <option value="">Semanal</option>
                                <option value="">Mensal</option>
                                <option value="">Anual</option>
                            </select>
                        </th>
                        <th>Data</th>
                        <th>Valor</th>
                    </tr>

                </thead>
                <tbody>
                    {tarefas}
                </tbody>
            </table>
        </div >
    )
}