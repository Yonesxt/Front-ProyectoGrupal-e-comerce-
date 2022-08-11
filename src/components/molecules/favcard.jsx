import React from "react";
import style from "../../styles/favcard.module.css";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../redux/actions";
import { Link } from "react-router-dom";

const Favcard = ({id, img, price, name, setItemToDelete}) => {
  const userLoged = useSelector((state) => state.userLoged);
  const dispatch = useDispatch();
  const handleClickDelete = () => {

    setTimeout(()=> {
      setItemToDelete(id)
    },200)
    dispatch(deleteFavorite(id, userLoged.id))
  };

  return (
    <div className={style.Cardcontainer}>
      <button className={style.favButton} onClick={handleClickDelete}>
        <ImCross />
      </button>
      <img className={style.img} src={img} alt={name} />
      <p className={style.name}>{name}</p>
      <p className={style.price}>${price}</p>
      <Link to={`/details/${id}`}>
        <button className={style.btn}> Ver Producto</button>
      </Link>
    </div>
  );
};

export default Favcard;
