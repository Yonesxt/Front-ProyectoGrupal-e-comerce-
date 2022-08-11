import React, { useEffect } from 'react';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer/Footer'
import style from '../../styles/home.module.css'

export function Home() {

    return (
        <div className={style.homeCont}>
            <SliderNews />
            <SlidePopularProducts />
            <SlideBestNotebooks />
            <BrandBar />
            <Slider />
            <Footer />
        </div>
    )
}