import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState("")

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        setinputValue("")
    
    }


     // No hace falta poner = (event => onSubmit(event)) en el form de abajo
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
