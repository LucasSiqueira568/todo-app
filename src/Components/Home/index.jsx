import './Home.css'
import React from 'react'

export default function Home(props) {

    const styleColor = {
        color: props.color,
        fontSize: props.fontSize,
    }
    return (
        <div className="Home">
            <div className="tituloHome">
                <h1 style={styleColor}>{props.titulo}</h1>
                <hr />
            </div>
            <table className="tableProjects" border={1} frame="void" rules="rows">
                <thead>
                    <tr>
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
                    <tr>
                        <td id="prod"><input type="checkbox" id="prod"/>  Compras</td>
                        <td>Mensal</td>
                        <td>30</td>
                        <td> R$ 600</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> Academia</td>
                        <td>Semanal</td>
                        <td>02</td>
                        <td> R$ 600</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> Shoping</td>
                        <td>Semanal</td>
                        <td>01</td>
                        <td> R$ 600</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> Lazer</td>
                        <td>Diário</td>
                        <td>01</td>
                        <td> R$ 600</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> Desenhar</td>
                        <td>Semanal</td>
                        <td>01</td>
                        <td> R$ 600</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> Cinema</td>
                        <td>Semanal</td>
                        <td>01</td>
                        <td> R$ 600</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}