import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");


    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length<=2){
            return;
        }

        setCategories((cats)=>[inputValue,...cats])
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </h2>
        </form>
    )
}
