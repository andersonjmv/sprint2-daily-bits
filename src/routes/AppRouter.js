import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Login} from '../components/login/Login'
import { Home } from '../components/navbar/menu/Home'
import Profile from '../components/navbar/menu/Profile'
import { Statistics } from '../components/navbar/menu/Statistics'
import Preguntas1 from '../components/questions/Preguntas1'
import Preguntas2 from '../components/questions/Preguntas2'
import Preguntas3 from '../components/questions/Preguntas3'
import {Welcome} from '../components/Welcome'



export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/html" component={Preguntas1}/>
                <Route path="/css" component={Preguntas2}/>
                <Route path="/js" component={Preguntas3}/>
            </Switch>
        </Router>
    )
}
