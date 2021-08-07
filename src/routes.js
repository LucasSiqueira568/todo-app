import React from "react"
import { Route, Switch } from "react-router-dom"



import Mensagem from '../src/Components/Mensagem'
import Todo from '../src/Components/Todo'
import HomePage from "./Components/HomePage";

const Routes = () => {
    return(
    <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/deleted" component={Mensagem} Mensagem />
        <Route path="/todos" component={Todo} Todo titulo="Todas as tarefas" color="#FFF" fontSize="1.8rem" />
        <Route component={() => <div>Page 404!</div>} />
    </Switch>

    );

};

export default Routes;
