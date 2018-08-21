import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {configure} from 'mobx'
import { Provider } from 'mobx-react'

import App from '@shared/App'
import * as store from './store'

// mobx全局设置，不准许在action之外进行observable状态的修改
configure({enforceActions: true})

const render = Component => {
    ReactDOM.render(
        <Provider {...store}>
            <Component/>
        </Provider>,
        document.querySelector('#app')
    )
}

render(App)
