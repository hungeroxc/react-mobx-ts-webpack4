import * as React from 'react'
import {Button} from 'antd'
import {hot} from 'react-hot-loader'

import BindIcon from '@assets/svg/bind.svg'


@hot(module)
class Page extends React.Component {
    render() {
        return (
            <div className="page">
                page123
                <BindIcon width={50} height={50}/>
                <Button type="primary">按钮</Button>
                {/* <img src={require('@assets/img/123.png')}/> */}
            </div>
        )
    }
}

export default hot(module)(Page)
