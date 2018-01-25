// FORM -- COMPONENT
// ------------------------------
import React from 'react'

function Form(props) {
    let { names, input } = props.nameEntryState
    let { handleChange, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} 
                value={input} 
                type="text" 
                placeholder="Enter Name Here" />
            <button >Submit</button>
        </form>
    )
}

export default Form
