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

const Category = ({index, img, title, link, categoryCardData}) => {

  // const categoryCardData = [
  //   {title: "New Arrival", img: newArrivalImage, link: '#'},
  //   {title: "Living Room", img: livingRoomImage, link: '#'},
  //   {title: "Dining", img: diningImage, link: '#'},
  //   {title: "Bedroom", img: bedroomImage, link: '#'},
  //   {title: "Outdoor", img: outDoorImage, link: '#'},
  //   {title: "Reclining Furniture", img: recliningImage, link: '#'},
  //   {title: "Sectional Sofas", img: SectionaSofa, link: '#'},
  //   {title: "Mattresses", img: Mattresses, link: '#'},
  //   {title: "Home Office", img: HomeOffice, link: '#'},
  //   {title: "Kids Room", img: KidsRoom, link: '#'},
  //   {title: "Area Rugs", img: AreaRugs, link: '#'},
  //   {title: "Home Decor", img: HomeDecor, link: '#'},
  //   {title: "Outlet", img: Outlet, link: '#'},
  // ]

  return (
    <div className='category-main-container'>
      <h3 className='category-heading'>{title}</h3>
      <div className='category-cards-container'>
      {categoryCardData.map((items, index) => {
        return <CategoryCard key={index} img={items.img} title={items.title} link={items.link}  />
      })}
      </div>
    </div>
  )
}

export default Category
