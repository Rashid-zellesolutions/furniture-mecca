import React from 'react'
import './Category.css';
import CategoryCard from './CategoryCard/CategoryCard';
import livingRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/living-room 1.png';
import bedRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/catogary-bedroom 1.png';
import diningRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/dinning 1.png';
import mattresses from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Mattresses 1.png';
import sectionalSofa from '../../../Assets/Furniture Mecca/Landing Page/shop by category/sassnal-sofa 1.png';
import homeOffice from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Home-Office-1 1.png';
import homeDecor from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Home-Decior 1.png';
import rugs from '../../../Assets/Furniture Mecca/Landing Page/shop by category/rug 1.png';
import kidsRoom from '../../../Assets/Furniture Mecca/Landing Page/shop by category/kids-room-1 1.png';
import accent from '../../../Assets/Furniture Mecca/Landing Page/shop by category/Accent 1.png';
import recliningFurniture from '../../../Assets/Furniture Mecca/Landing Page/shop by category/recliner-1 1.png';
import outlet from '../../../Assets/Furniture Mecca/Landing Page/shop by category/catory-outlet 1.png';

const Category = ({title, categoryData }) => {

  // console.log("category data : ", categoryData)
  const category = [
    {img: livingRoom, link: '/living-room'}, 
    {img: bedRoom, link: '/bedroom'},
    {img: diningRoom, link: '/dining-room'},
    {img: mattresses, link: '/mattresses'},
    {img: sectionalSofa, link: '#'},
    {img: homeOffice, link: '#'},
    {img: homeDecor, link: '#'},
    {img: rugs, link: '/accent-furniture-and-rugs'},
    {img: kidsRoom, link: '/kids'},
    {img: accent, link: '/accent-furniture-and-rugs'},
    {img: recliningFurniture, link: '#'},
    {img: outlet, link: '/outlets'},
  ]

  return (
    <div className='category-main-container'>
      <h3 className='category-heading'>{title}</h3>
        <div className='category-cards-container'>
          {/* {categoryData && categoryData.map((items, index) => {
            return <CategoryCard key={index} img={items.img} title={items.title} link={items.link}  />
          })} */}
          {category.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.img} alt='img' />
            </a>
          ))}
        </div>
    </div>
  )
}

export default Category
