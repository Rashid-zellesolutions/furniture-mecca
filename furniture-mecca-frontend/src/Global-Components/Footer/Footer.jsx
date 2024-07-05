import React from 'react'
import './Footer.css';
import FooterNav from './FooterNav/FooterNav';
import footerRedFurnitureMecca from '../../Assets/to-be-change/furniture-mecca-red.jpeg'
import facebook from '../../Assets/icons/facebook.png'
import tiktok from '../../Assets/icons/tiktok.png'
import insta from '../../Assets/icons/instagram.png'
import youtube from '../../Assets/icons/youtube.png'
import location from '../../Assets/icons/location.png'
import call from '../../Assets/icons/call.png'
import mail from '../../Assets/icons/mail.png'

const Footer = () => {

    const footerNavLinks = [
        {
            heading: "Living Room", navItems: [
            {name: 'Living Room Sets', link: '#'},
            {name: 'Sectionals', link: '#'},
            {name: 'Sofas', link: '#'},
            {name: 'Sleeper Sofas', link: '#'},
            {name: 'Love Seats', link: '#'},
            {name: 'Reclining Furniture', link: '#'},
            {name: 'Small Space Living Room', link: '#'},
            {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Bed Room", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Mattresses", navItems: [
                {name: 'Dining Room Sets', link: '#'},
                {name: 'Pub Height Dining Set', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ]
        },
        {
            heading: "Dining Rooms", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'Love Seats', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Kids", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Accent", navItems: [
                {name: 'Dining Room Sets', link: '#'},
                {name: 'Pub Height Dining Set', link: '#'},
                {name: 'Dining Chairs & Benches', link: '#'},
                {name: 'Dining Tables', link: '#'},
                {name: 'Bar Stools', link: '#'},
                {name: 'Servers, Buffets & China Cabinets', link: '#'},
            ]
        },
        {
            heading: "Home Decor", navItems: [
                {name: 'Living Room Sets', link: '#'},
                {name: 'Sectionals', link: '#'},
                {name: 'Sofas', link: '#'},
                {name: 'Sleeper Sofas', link: '#'},
                {name: 'Love Seats', link: '#'},
                {name: 'Reclining Furniture', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Rugs", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
        {
            heading: "Rugs", navItems: [
                {name: 'Bed Room Sets', link: '#'},
                {name: 'Bed & HeadBoards', link: '#'},
                {name: 'Dressers', link: '#'},
                {name: 'Chest', link: '#'},
                {name: 'Dresser & Mirror Sets', link: '#'},
                {name: 'Night Stands', link: '#'},
                {name: 'Mirrors', link: '#'},
                {name: 'Twin Beds', link: '#'},
                {name: 'Queen Beds', link: '#'},
                {name: 'King Beds', link: '#'},
                {name: 'Full Bed', link: '#'},
                {name: 'Small Space Bed Room', link: '#'},
                {name: 'Outlets', link: '#'},
            ]
        },
    ]
    const socialIcons = [
        {name: 'facebook', icon: facebook, link: '#'},
        {name: 'tiktok', icon: tiktok, link: '#'},
        {name : 'youtube', icon: youtube, link: '#'},
        {name: 'insta', icon: insta, link: '#'}
    ]

    const locationPhoneMail = [
        {name: 'Philadelphia', icon: location, link: '#'},
        {name: '215 352 1600', icon: call, link: '#'},
        {name: 'meccacustomercare@gmail.com', icon: mail, link: '#'}
    ]

    const footerCustomerCareAndAbout = [
        {heading: 'Customer Care', navLinks: [
            {name: 'Contact Us', link: '#'},
            {name: 'Financing', link: '#'},
            {name: 'Shipping & Delivery', link: '#'},
            {name: 'Terms & Conditions', link: '#'},
        ]},
        {heading: 'About Furniture Mecca', navLinks: [
            {name: 'About Us', link: '#'},
            {name: 'Career', link: '#'},
            {name: 'Store Locations', link: '#'},
            {name: 'Reference', link: '#'},
            {name: 'My Account', link: '#'},
        ]},
    ]


  return (
    <div className='footer-main-container'>
      <div className='footer-nav'>
        {footerNavLinks.map((items, index) => {
            return <div key={index} className='footer-nav-links'>
            <h3 className='footer-nav-link-heading'>{items.heading}</h3>
            {items.navItems.map((item, innerIndex) => {
                return <FooterNav link={item.link} linkName={item.name} />
            })}
        </div>
        })}
      </div>
    <div className='footer-contact-section'>
        <div className='footer-social-and-address-container'>
            <div className='social-icons'>
                {socialIcons.map((item, index) => {
                    return <a href={item.link}>
                        <img src={item.icon} alt={item.name} />
                    </a>
                })}
            </div>
            <div className='rating-container'>
                <img src={footerRedFurnitureMecca} alt="img" />
                <div className='rating-stars-container'>
                    <h3>FURNITURE MECCA</h3>
                    <span>1 2 3 4 5</span>
                    <p>847 Google Reviews</p>
                </div>
            </div>
            <div className='location-phone-main-container'>
                {locationPhoneMail.map((item, index) => {
                    return <span className='icon-and-name'>
                        <img src={item.icon} alt={item.name} />
                        <a href={item.link}>{item.name}</a>
                    </span>
                })}
            </div>
        </div>
        <div className='footer-customer-care-and-about-furniture-mecca'>
            {footerCustomerCareAndAbout.map((items, index) => {
                return <div key={index} className='footer-care-and-about'>
                    <h3>{items.heading}</h3>
                    {items.navLinks.map((innerItem, innerIndex) => {
                        return <a className='footer-care-and-about-links' key={innerIndex} href={innerItem}>{innerItem.name}</a>
                    })}
                </div>
            })}
        </div>
    </div>
    <div className='footer-rights-reserved-container'>
        <p>2020 - 2024 Furniture Mecca. All Rights Reserved</p>
        <p>
            <a href='#'>Designed & Managed By Zelle Solutions</a>
        </p>
    </div>
    </div>
  )
}

export default Footer
