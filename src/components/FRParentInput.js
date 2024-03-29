import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();

    }
    handler = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <FRInput ref = {this.inputRef}/>
                <button onClick = {this.handler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
