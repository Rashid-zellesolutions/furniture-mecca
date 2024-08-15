import { createSlice } from "@reduxjs/toolkit";
import heartImg from '../../Assets/icons/like.png'
import muellerSofa from '../../Assets/images/Mueller-Sofa-and-Loveseat-01-300x200 1.png';
import sherryImage from '../../Assets/images/Sherry-Set-01-300x200 1.png';
import filledStar from '../../Assets/icons/Star 19.png';
import productTag from '../../Assets/images/product-tag.png';

const productsSlicer = createSlice({
    name: 'products',
    initialState: {
        data: [
            {id: 1, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90" Manual Reclining Sofa & 79" Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(200)', priceTag: '$1,198.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {productTag: productTag,  mainImage: muellerSofa, productTitle: `Laurel Beige 85'' Sofa & 65'' Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(100)', priceTag: '$999.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 2, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Avenger Black 89'' Power Reclining Sofa & 78'' Reclining Console Loveseat with USB`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(197)', priceTag: '$1,998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 3, heart: heartImg, mainImage: muellerSofa, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(218)', priceTag: '$998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
                },
            {id: 4, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(150)', priceTag: '$4,598.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 5, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 6, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 7, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 8, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 9, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 10, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 11, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 12, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days'
    },
    {id: 13, heart: heartImg, mainImage: muellerSofa, hoverImage: sherryImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
            {icon: filledStar, title: 'filled'},
        ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
        reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: '#FF0000'},
            {color: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days'
    },
        ]
    },
    reducers: {
        setProductData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {setProductData} = productsSlicer.actions;
export default productsSlicer.reducer;