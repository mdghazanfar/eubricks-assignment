import { Sign } from 'crypto';
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoList from "./Compnents/Todo/TodoList";
import Menu from './Pages/Menu/Menu';
import SignUp from './Pages/LoginPage/SignUp';
import SignIn from './Pages/LoginPage/SigIn';
import ForgetPasswordPage from './Pages/LoginPage/Forgetpassword';


const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/forget-password'>
                    <ForgetPasswordPage />
                </Route>
                <Route path="/SignUp">
                    <SignUp />
                </Route>
                <Route path="/SignIn">
                    <SignIn />
                </Route>
                <Route path="/Todo">
                    <TodoList />
                </Route>
                <Route path="/">
                    <Menu />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;