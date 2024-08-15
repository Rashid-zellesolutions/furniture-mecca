import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Categories from './UI/Pages/Categories/Categories';
import Home from './UI/Pages/Home/Home';
import { IoIosArrowDropup } from "react-icons/io";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';

import livingRoomMainImage from './Assets/pages-main-images/Living-Room-Desk-1-1024x341.jpg';
import bedroomMainImage from './Assets/pages-main-images/Bedroom-Desk-1.jpg';
import diningRoomMainImage from './Assets/pages-main-images/Dining-Room-Desk-1 1.png';
import mattressesMainImage from './Assets/pages-main-images/Mattresses-Desk-1-1024x341.jpg';
import kidsMainImage from './Assets/pages-main-images/Kids-Room-Desk-1-1024x341.jpg';
import accentFurnitureMainImage from './Assets/pages-main-images/Accent-Furniture-Desk-1-1024x341.jpg';
import smallSpaceMainImage from './Assets/pages-main-images/Small-Space-Desk-1-1024x341.jpg';
import outletMainImage from './Assets/pages-main-images/Outlet-Desk-1-1024x341.jpg';
import tentSaleMainImage from './Assets/pages-main-images/Main-Banner-Desktop-1-1536x409.jpg'

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
import Haider from './Global-Components/Header/Haider';
import Footer from './Global-Components/Footer/Footer';
import ProductArchive from './UI/Pages/ProductArchive/ProductArchive';
import SingleProduct from './UI/Pages/SingleProduct/SingleProduct';


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

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Router>
      <div>
        <Haider />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* Main Pages Routes */}
          <Route path='/dining-room-sets' element={<ProductArchive />} />
          <Route 
            path='/living-room' 
            element={<Categories categoriesMainImage={livingRoomMainImage} categoryCardData={categoryCardData} newArrival={false} />} 
          />
          <Route 
            path='/bedroom' 
            element={<Categories categoriesMainImage={bedroomMainImage} categoryCardData={categoryCardData} newArrival={false} />} 
          />
          <Route 
            path='/dining-room' 
            element={<Categories categoriesMainImage={diningRoomMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/mattresses' 
            element={<Categories categoriesMainImage={mattressesMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/kids' 
            element={<Categories categoriesMainImage={kidsMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/accent-furniture-and-rugs' 
            element={<Categories categoriesMainImage={accentFurnitureMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/small-spaces' 
            element={<Categories categoriesMainImage={smallSpaceMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/outlets' 
            element={<Categories categoriesMainImage={outletMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />
          <Route 
            path='/tent-sale' 
            element={<Categories categoriesMainImage={tentSaleMainImage} categoryCardData={categoryCardData} newArrival={true} />} 
          />

          <Route path='/single-product/:id' element={<SingleProduct  />} />
        </Routes>
        <Footer />
        <button onClick={handleClickTop} className='scroll-to-top-button'>
          <IoIosArrowDropup size={30} className='lead-to-top-btn' />
        </button>
      </div>
    </Router>
  );
}

export default App;
