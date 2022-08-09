import React from "react";
import style from "../../styles/favcard.module.css";


import { ImCross } from "react-icons/im"
import { useDispatch, useSelector } from "react-redux";
import {  deleteFavorite } from '../../redux/actions'
import { Link } from "react-router-dom";

const Favcard = (props) => {

  const userLoged = useSelector((state) => state.userLoged)
  const dispatch = useDispatch()

  function handleClickDelete (e) {
    e.preventDefault();     
    dispatch(deleteFavorite(props.id, userLoged.id))   
    
    
} 
  return (
    <div className={style.Cardcontainer}>
      <button
        className={style.favButton}
        onClick={(e)=>handleClickDelete(e)}
        
      >
        <ImCross/>
      </button>
      <img className={style.img} src={props.img} alt={props.name} />
      <p className={style.name}>{props.name}</p>
      <p className={style.price}>${props.price}</p>
       <Link to={`/details/${props.id}`}><button className={style.btn}> Ver Producto</button></Link>
    </div>
  );
};

export default Favcard;
