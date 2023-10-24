import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

   // en el useState siempre es ideal tener un estado inicial y no undefined
   const [categories, setCategories] = useState(['one punch']);

   const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories,]);
   }

   return (
      <>
         <h1>GifExpertApp</h1>

         {/* input */}
         <AddCategory
            // setCategories={ setCategories }

            // por convencion si una propiedad lleva on por delante es que esta emitiendo un valor
            onNewCategory={valor => onAddCategory(valor)}
         />

         {/* listado gifts */}
         {
            categories.map( (category) => (
               <GifGrid key={category} category={category} />
            ))
         }

      </>
   )
}
