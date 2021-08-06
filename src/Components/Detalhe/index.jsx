import './Detalhe.css'
import React from 'react'

export default function Detalhe(props) {
    return (
        <div className="Detalhe">
            <div className="description">
                <h1><a href="/">Descrição</a></h1>
                <h1><a href="/">Cadastrar</a></h1>
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