import * as React from 'react'
import {Button} from 'antd'
import {hot} from 'react-hot-loader'

import BindIcon from '@assets/svg/bind.svg'
import * as style from './index.scss'
import { ComponentExt } from '@utils/reactExt'



@hot(module)
class Page extends ComponentExt {
    a = 'b'

    static staticA = 'staticA'

    click = () => {
        console.log(this.a)
        console.log(Page.conso())
    }

    static conso = () => {
        return Page.staticA
    }

    getRequest = async () => {
        const result = await this.api.getRequest({})
        console.log(result)
    }

    render() {
        return (
            <div className={style.page}>
                page123
                <BindIcon width={50} height={50}/>
                <Button onClick={this.click} type="primary">按钮</Button>
                <Button onClick={this.getRequest}>get请求</Button>
                <img src={require('@assets/img/123.png')}/>
            </div>
        )
    }
}

export default hot(module)(Page)
