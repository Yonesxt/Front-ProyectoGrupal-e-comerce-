import React, { useEffect, useState } from 'react'
import { CardImg } from '../atoms/cardImg'
import style from '../../styles/carrousel.module.css'

export const Slider = () => {
const [index, setIndex] = useState(0)

const getAssets = (name, format = 'png') => require(`../../assets/${name}.${format}`)

    const carruselImages = [
    getAssets('pcGamer1', 'jpg'),
    getAssets('pcGamer2', 'jpg'),
    getAssets('pcGamer3', 'jpg'),
    getAssets('pcGamer4', 'jpg'),
    getAssets('pcGamer5', 'jpg'),
    getAssets('pcGamer6', 'jpg')
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
                <CardImg index={index} carruselImages={carruselImages} onClick={handleNext}/>
            </div>
        </div>
    )
}















































// import React, { useState, useEffect } from "react";
// import style from '../../styles/carrousel.module.css'

// export const Carrousel = () => {

//     const images = ['pcGamer1.jpg', 'pcGamer2.jpg', 'pcGamer3.jpg', 'pcGamer4.jpg', 'pcGamer5.jpg', 'pcGamer6.jpg',]

//     const [selectedIndex, setSelectedIndex] = useState(0)
//     const [selectedImage, setSelectedImage] = useState(images[0])

//     const selectNewImage = (index, images, next = true) => {
//         const condition = next 
//             ? selectedIndex < images.length 
//             : selectedIndex > 0;

//         const nextIndex = next 
//             ? (condition ? selectedIndex + 1 : 0) 
//             : condition 
//                 ? selectedIndex - 1 
//                 : images.length - 1;

//         setSelectedImage(images[nextIndex]);
//         setSelectedIndex(nextIndex);
//     }

//     const previus = () => {
//         selectNewImage(selectedIndex, images, false)
//     }

//     const next = () => {
//         selectNewImage(selectedIndex, images)
//     }

//     return (
//         <div>
//             <img className={style.img} src={require(`../../assets/${selectedImage}`)} alt='imagenes de pc' />
//         </div>
//     )

// }







// return (
//     <motion.div className={style.sliderContainer}>
//         <motion.div className={style.slider} drag='x' dragConstraints={{right: -20, left: -680}} >
//         {
//             images.map(item => (
//                 <motion.div className={style.item}>
//                     <img src={item} className={style.img}/>
//                 </motion.div>
//             ))
//         }
//         </motion.div>
//     </motion.div>
// )