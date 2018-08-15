import * as React from 'react'
import {hot} from 'react-hot-loader'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './index.scss'
import Home from '@views/Home'
import Page from '@views/page'

@hot(module)
class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/page" component={Page}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
