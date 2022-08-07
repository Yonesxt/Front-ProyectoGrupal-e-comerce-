import React from 'react'
import style from '../../styles/carrousel.module.css'

export const CardImg = ({carruselImages = [], index = 0, onClick }) => {

    return (
    <img src={carruselImages[index]} onClick={onClick}  className={style.img}/>
    )
}