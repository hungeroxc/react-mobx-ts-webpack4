import * as React from 'react'
import {Button} from 'antd'
import {hot} from 'react-hot-loader'

import BindIcon from '@assets/svg/bind.svg'
import * as style from './index.scss'


@hot(module)
class Page extends React.Component {
    a = 'b'

    static staticA = 'staticA'

    click = () => {
        console.log(this.a)
        console.log(Page.conso())
    }

    static conso = () => {
        return Page.staticA
    }

    render() {
        return (
            <div className={style.page}>
                page123
                <BindIcon width={50} height={50}/>
                <Button onClick={this.click} type="primary">按钮</Button>
                <img src={require('@assets/img/123.png')}/>
            </div>
        )
    }
}

export default hot(module)(Page)
