import './Detalhe.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Detalhe(props) {
    return (
        <div className="Detalhe">
            <div className="description">
                <h1><Link to="/">Descrição</Link></h1>
                <h1><Link to="/">Cadastrar</Link></h1>
            </div>


            <table>
                <tr>
                    <th>Nome</th>
                    <td>Compras</td>
                </tr>
                <tr>
                    <th>Tipo</th>
                    <td>Mensal</td>
                </tr>
                <tr>
                    <th>Valor</th>
                    <td>R$ 600</td>
                </tr>
                <tr>
                    <th>Tempo</th>
                    <td>01 Dia</td>
                </tr>

            </table>
            <div className="total">
                <h1>Total</h1>
                <h1>R$ 700,00</h1>
            </div>
            <div className="buttonDescription">
                <button type="submit">Salvar <i class="fas fa-save"></i></button>
            </div>
        </div>
    )
}