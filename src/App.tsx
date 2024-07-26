import React from 'react'
import './App.css'
import './categories.styles.scss'
import categories, { Category } from './models/Category'
import CategoryItem from './components/category-item/category-item.component'

const App: React.FC = () => {

    return (
        <div className='categories-container'>
            {categories.map(( category ) => (
                <CategoryItem category={category}/>
            ))}
        </div>
    )
}

export default App
