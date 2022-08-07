import React from 'react'
import style from '../../styles/slide.module.css';
import { useNavigate } from 'react-router-dom';
import favourites from '../../assets/favourites.png'
import click from '../../assets/favourites-click.png'
import { useState } from 'react';

function Card({image, name, price, id}) {
  let [fav, setFav] = useState(false)

  let navigate = useNavigate()

  function handleClick (e) {
    e.preventDefault();
    !fav? setFav(true):
    setFav(false)
  }

  return (
    <div className={style.container}>
        {/* <img className={style.img} src={image} alt="img nno found" width='130' height='100' />
        <div className={style.textContainer}>
          <h4 className={style.name}>{name}</h4>
          <h5 className={style.price}>$ {price}</h5>
          <button onClick={() => navigate(`/details/${id}`)}>Ver producto</button>
        </div> */}
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
        <button onClick={(e) => handleClick(e)}>
          {/* <img src={!fav? favourites : click} alt='favourite' className={style.favourite}/> */}
        </button>
      </div>
      <div className={style.textContainer}>
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>${price}</h5>
        <button onClick={() => navigate(`/details/${id}`)}>Ver producto</button>
        <button>Agregar a favoritos</button>
      </div>
    </div>
  )
}

export default Card