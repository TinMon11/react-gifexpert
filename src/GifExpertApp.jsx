import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const clearAll = ()=> {
        setCategories([])
    }

    const onAddCategory = (newCategory) => {

        !categories.includes(newCategory) &&
            setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, "Valorant"])  TAMBIEN DE ESTA FORMA SE PUEDE HACER

    }


    return (
        <>  
            <div className='top-page'>
            <h1>Gif Expert App</h1>
            <button onClick={clearAll}>ClearAll</button>
            </div>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {categories.map((category) =>
                <GifGrid
                    key={category}
                    category={category}
                />
            )}

        </>
    )
}
