import * as React from 'react'

import './index.scss'

function decorator(target) {
    console.log(target)
}

@decorator
class App extends React.Component {
    render() {
        return (
            <div className="app">app</div>
        )
    }
}

export default App
