import * as React from 'react'
import { withRouter } from 'react-router-dom'

import { ComponentExt } from '@utils/reactExt'

interface Props {
    increase: (num: number) => void
}

@withRouter
class Increase extends ComponentExt<Props> {
    render() {
        return <button onClick={() => this.props.increase(10)}>+</button>
    }
}

export default Increase
