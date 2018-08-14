import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from '@views/App'

const render = Component => {
    ReactDOM.render(
        <Component/>,
        document.querySelector('#app')
    )
}

render(App)

