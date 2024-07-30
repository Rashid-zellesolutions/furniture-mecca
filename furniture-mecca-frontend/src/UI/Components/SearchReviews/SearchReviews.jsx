import React from 'react'
import './SearchReviews.css';
import searchIcon from '../../../Assets/icons/search-white.png';

const SearchReviews = () => {
    const relatedReviews = [
        {relatedReview: 'good quality 111'},
        {relatedReview: 'great set 89'},
        {relatedReview: 'seating 78'},
        {relatedReview: 'great price 71'},
        {relatedReview: 'patio 57'},
        {relatedReview: 'value 31'},
        {relatedReview: 'back coushions 24'},
        {relatedReview: 'poor quality 24'},
        {relatedReview: 'perfect size 20'},
    ]
  return (
    <div className='search-reviews-main-container'>
        <p>Show reviews that mention</p>
        <div className='search-reviews'>
            <div className='review-search-bar-div'>
                <div className='search-bar'>
                    <input type='text' placeholder='Search' />
                    <div className='search-button'>
                        <img src={searchIcon} alt='search icon' />
                    </div>
                </div>
            </div>
            <div className='most-related-reviews'>
                <div className='related-revew-section'>
                    {relatedReviews.map((items, index) => {
                        return <p key={index}>{items.relatedReview}</p>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchReviews
