import React, { Component } from 'react';
class Input extends Component {
    render() {
        return (
        <div className = 'input-wrapper'>
            <label> { this.props.label } </label>
            <input 
                onChange = { this.props.handleChange }
                onBlur = { this.props.onBlur }
                autoCorrect="off" 
                autoCapitalize="off" 
                spellCheck="false"
                type = "text" 
                defaultValue = { this.props.defaultValue }  
                disabled = { this.props.disabled } 
                ref = { this.props.inputRef }
                name = { this.props.name }>
            </input>
        </div>)
    }
}

export default Input;   