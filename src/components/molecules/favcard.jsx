import React from "react";
import style from "../../styles/favcard.module.css";

import favorites from '../../assets/favourites.png'
import click from '../../assets/favourites-click.png'

const Favcard = (props) => {
  return (
    <div className={style.Cardcontainer}>
      <button
        className={style.favButton}
        
      >
        <img className={style.favEmpty} src={favorites} alt="favorites" />
      </button>
      <img className={style.img} src={props.img} alt={props.name} />
      <p className={style.name}>{props.name}</p>
      <p className={style.price}>${props.price}</p>
    </div>
  );
};

export default Favcard;
