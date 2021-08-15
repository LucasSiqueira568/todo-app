import React from "react"
import { Route, Switch } from "react-router-dom"



import Mensagem from '../src/Components/Mensagem'
import TodoPage from './pages/TodoPage'
import HomePage from "./pages/HomePage";
import Erro from "./Components/error"
import Favorites from "./pages/Favorites";

const Routes = () => {
    return(
    <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/todos" component={TodoPage} />
        <Route path="/deleted" component={Mensagem} />
        <Route path="/deleted" component={Mensagem} />
        <Route path="/favorites" component={Favorites} />
        <Route component={Erro} />
    </Switch>

    );

};

export default Routes;
