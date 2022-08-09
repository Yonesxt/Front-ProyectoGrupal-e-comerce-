import React from 'react'
import style from '../../styles/slide.module.css';


function Card({ image, name, price, rating }) {


  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
      </div>
      <div className={style.textContainer}>
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>${price}</h5>
        <h6 className={style.price}>⭐{Math.round(rating)}</h6>
      </div>
    </div>
  )
}

export default Card