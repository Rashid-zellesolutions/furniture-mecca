import React from 'react'
import './Category.css';
import CategoryCard from './CategoryCard/CategoryCard';
// import newArrivalImage from '../../../Assets/category/new-arrival.png';
// import livingRoomImage from '../../../Assets/category/living-room.png';
// import diningImage from '../../../Assets/category/dining.png';
// import bedroomImage from '../../../Assets/category/badroom.png';
// import outDoorImage from '../../../Assets/category/out-door.png';
// import recliningImage from '../../../Assets/category/reclining.png';
// import SectionaSofa from '../../../Assets/to-be-change/sectional-sofa.png';
// import Mattresses from '../../../Assets/to-be-change/mattresses.png';
// import HomeOffice from '../../../Assets/to-be-change/home-office.png';
// import KidsRoom from '../../../Assets/to-be-change/kids-room.png';
// import AreaRugs from '../../../Assets/to-be-change/area-rugs.png';
// import HomeDecor from '../../../Assets/to-be-change/home-decor.png';
// import Outlet from '../../../Assets/to-be-change/outlet.png';

const Category = ({title, categoryData }) => {

  console.log("category data : ", categoryData)

  return (
    <div className='category-main-container'>
      <h3 className='category-heading'>{title}</h3>
        <div className='category-cards-container'>
          {categoryData.map((items, index) => {
            return <CategoryCard key={index} img={items.img} title={items.title} link={items.link}  />
          })}
        </div>
    </div>
  )
}

export default Category
