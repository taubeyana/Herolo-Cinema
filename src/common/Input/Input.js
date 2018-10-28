import React, { Component } from 'react';
// import './Input.css'
class Input extends Component {
    render() {
        return (
        <div className = 'input-wrapper'>
            <label> { this.props.label } </label>
            <input 
                autoCorrect="off" 
                autoCapitalize="off" 
                spellCheck="false"
                type = "text" 
                defaultValue = { this.props.defaultValue }  
                // onChange = { (e) => this.props.handleChange(e) } 
                disabled = { this.props.disabled } 
                ref = { this.props.inputRef }
                name = { this.props.name }>
            </input>
        </div>)
    }
}

export default Input;   