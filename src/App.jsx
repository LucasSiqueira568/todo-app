import './App.scss'
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes"



export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    )
}