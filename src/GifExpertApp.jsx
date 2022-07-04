import { useState } from "react";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, 'Valorant']); //Agregar al final

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]); //Agregar al inicio
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories } 
        // onNewCategory={ event => onAddCategory(event)} (equivale a la onAddCategory )
        onNewCategory={value => onAddCategory(value)}
      />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }

    </>
  )
}
