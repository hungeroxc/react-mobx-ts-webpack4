import * as React from 'react'

import { ComponentExt } from '@utils/reactExt'

interface Props {
    increase: (num: number) => void
}

class Increase extends ComponentExt<Props> {
    render() {
        return <button onClick={() => this.props.increase(10)}>+</button>
    }
}

export default Increase
