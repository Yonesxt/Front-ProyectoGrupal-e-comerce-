import React, { useEffect, useState } from 'react'
import { CardImg } from '../atoms/cardNews'
import style from '../../styles/sliderNews.module.css'
import { Link } from 'react-router-dom'

export const SliderNews = () => {
const [index, setIndex] = useState(0)

const getAssets = (name, format = 'png') => require(`../../assets/${name}.${format}`)

    const carruselImages = [
    getAssets('news13', 'jpg'),
    getAssets('news8', 'png'),
    getAssets('news10', 'jpg'),
    getAssets('news11', 'jpg')
    ]

    const spritesLength = carruselImages.length;

    const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)

    useEffect(() => {
    const timer = setTimeout(() => handleNext(), 3000);
    return () => clearTimeout(timer)
    }, [handleNext]) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={style.sliderContainer}>
            <div className={style.slider}>
                <Link to='/news'>
                <CardImg className={style.img} index={index} carruselImages={carruselImages} onClick={handleNext}/>
                </Link>
            </div>
        </div>
    )
}