import * as React from 'react'

import { ComponentExt } from '@utils/reactExt'

interface Props {
    decrease: (num: number) => void
}

class Decrease extends ComponentExt<Props> {
    render() {
        return (
            <button onClick={() => this.props.decrease(5)}>-</button>
        )
    }
}

export default Decrease
