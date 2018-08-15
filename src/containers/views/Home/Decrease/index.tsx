import * as React from 'react'

interface Props {
    decrease: (num: number) => void
}

class Decrease extends React.Component<Props> {
    render() {
        return (
            <button onClick={() => this.props.decrease(5)}>-</button>
        )
    }
}

export default Decrease
