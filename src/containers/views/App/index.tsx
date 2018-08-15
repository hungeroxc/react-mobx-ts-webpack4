import * as React from 'react'
import {hot} from 'react-hot-loader'

import './index.scss'

@hot(module)
class App extends React.Component {

    state = {
        num: 0
    }

    addOne = () => {
        let {num} = this.state
        num += 1
        this.setState({
            num
        })
    }

    render() {
        const {num} = this.state
        return (
            <div className="app">
                <div>{num}</div>
                <div>32</div>
                <button onClick={this.addOne}>+</button>
            </div>
        )
    }
}

export default App
