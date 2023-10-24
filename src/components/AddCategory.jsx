import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue(target.value);
   }

   const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) return;

      setInputValue('');
      // momento donde se emite el valor
      onNewCategory(inputValue.trim());
   }

   return (
      <form onSubmit={ (event) => onSubmit(event) }>
         <input
            placeholder="Buscar gif"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
         />
      </form>
   )
}
