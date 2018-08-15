import * as React from 'react'

interface Props {
    increase: (num: number) => void
}

class Increase extends React.Component<Props> {
    render() {
        return (
            <button onClick={() => this.props.increase(10)}>+</button>
        )
    }
}

export default Increase
