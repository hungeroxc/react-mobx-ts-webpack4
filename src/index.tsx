import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './containers/views/App'

const render = Component => {
    ReactDOM.render(
        <Component/>,
        document.querySelector('#app')
    )
}

render(App)

