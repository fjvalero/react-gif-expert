import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {
// export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {        
        event.preventDefault();
        
        if ( inputValue.trim().length <= 1 ) return;
        //setCategories(cats => [inputValue, ...cats]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            < input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} // === event => onInputChange(event)
            />
        </form>
    )
}
