import * as React from 'react'
import {Button} from 'antd'
import {hot} from 'react-hot-loader'

@hot(module)
class Page extends React.Component {
    render() {
        return (
            <div className="page">
                page
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}

export default hot(module)(Page)
