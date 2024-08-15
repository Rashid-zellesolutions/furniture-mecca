import React from 'react'
import './Category.css';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = ({title, categoryData }) => {

  console.log("category data : ", categoryData)

  return (
    <div className='category-main-container'>
      <h3 className='category-heading'>{title}</h3>
        <div className='category-cards-container'>
          {categoryData && categoryData.map((items, index) => {
            return <CategoryCard key={index} img={items.img} title={items.title} link={items.link}  />
          })}
        </div>
    </div>
  )
}

export default Category
