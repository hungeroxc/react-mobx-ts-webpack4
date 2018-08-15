import * as React from 'react'
import {inject, observer} from 'mobx-react'

import Increase from './Increase'
import Decrease from './Decrease'

interface Props {
    globalStore?: IGlobalStore.GlobalStore
}

@inject('globalStore')
@observer
class Home extends React.Component<Props> {
    render() {
        const {num, increase, decrease} = this.props.globalStore
        return (
            <div className="home">
                <div>{num}</div>
                <Increase increase={increase}/>
                <Decrease decrease={decrease}/>
            </div>
        )
    }
}

export default Home
