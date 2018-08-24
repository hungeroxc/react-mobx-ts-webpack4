import * as React from 'react'
import { Button } from 'antd'
import { hot } from 'react-hot-loader'

import BindIcon from '@assets/svg/bind.svg'
import * as style from './index.scss'
import { ComponentExt } from '@utils/reactExt'

@hot(module)
class Page extends ComponentExt {
    getRequest = async () => {
        const result = await this.api.getRequest({
            a: 'oxc',
            b: 1234
        })
        console.log(result)
    }

    postRequest = async () => {
        const result = await this.api.postRequest({
            a: 'oxc',
            b: 1234
        })
        console.log(result)
    }

    render() {
        return (
            <div className={style.page}>
                page123
                <BindIcon width={50} height={50} />
                <Button onClick={this.getRequest}>get请求</Button>
                <Button onClick={this.postRequest}>post请求</Button>
                <img src={require('@assets/img/123.png')} />
            </div>
        )
    }
}

export default Page
