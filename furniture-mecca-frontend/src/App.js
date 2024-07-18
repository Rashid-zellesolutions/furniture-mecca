import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Categories from './UI/Pages/Categories/Categories';
import Home from './UI/Pages/Home/Home';

import paypalOneBanner from './Assets/to-be-change/download 51.png'
import paypalTwoBanner from './Assets/to-be-change/download 52.png'
import diningRoomMainImage from './Assets/images/Dining-Room-Desk-1 1.png'
import bedroomMainImage from './Assets/images/Bedroom-Desk-1.jpg'

import newArrivalImage from './Assets/category/new-arrival.png';
import livingRoomImage from './Assets/category/living-room.png';
import diningImage from './Assets/category/dining.png';
import bedroomImage from './Assets/category/badroom.png';
import outDoorImage from './Assets/category/out-door.png';
import recliningImage from './Assets/category/reclining.png';
import SectionaSofa from './Assets/to-be-change/sectional-sofa.png';
import Mattresses from './Assets/to-be-change/mattresses.png';
import HomeOffice from './Assets/to-be-change/home-office.png';
import KidsRoom from './Assets/to-be-change/kids-room.png';
import AreaRugs from './Assets/to-be-change/area-rugs.png';
import HomeDecor from './Assets/to-be-change/home-decor.png';
import Outlet from './Assets/to-be-change/outlet.png';


function App() {
  const categoryCardData = [
    {title: "Dining Room Sets", img: newArrivalImage, link: '#'},
    {title: "Pub Height Dining Sets", img: livingRoomImage, link: '#'},
    {title: "Dining Table", img: diningImage, link: '#'},
    {title: "Dining Chairs & Banches", img: bedroomImage, link: '#'},
    {title: "Counter & Bar  Stools", img: outDoorImage, link: '#'},
    {title: "Server Buffets & China Cabinate", img: recliningImage, link: '#'},
    {title: "Small Space Dining", img: SectionaSofa, link: '#'},
    {title: "Dining Room Collections", img: Mattresses, link: '#'},
    {title: "Shop All Dining", img: HomeOffice, link: '#'},
    {title: "Dining Room Outlets", img: KidsRoom, link: '#'},
    {title: "Area Rugs", img: AreaRugs, link: '#'},
    {title: "Home Decor", img: HomeDecor, link: '#'},
    {title: "Outlet", img: Outlet, link: '#'},
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dining-room' element={<Categories categoriesMainImage={diningRoomMainImage} 
          categoryCardData={categoryCardData} newArrival={true} />} />
        <Route path='/bedroom' element={<Categories categoriesMainImage={bedroomMainImage} 
          categoryCardData={categoryCardData} newArrival={false} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
