import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, cleaner } from "../../redux/actions";
import style from "../../styles/details.module.css";
import { useCartContext } from '../../context/CartItem';
import Comments from "../atoms/Comments";

export default function Details() {

  const superState = useCartContext()

  const { addItemToCart } = superState.effects

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.detail);

  const { image, name, price, brand, description, stock, rating } = product

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(cleaner())
  }, [id]) //eslint-disable-line react-hooks/exhaustive-deps

  const handleItemToCart = (product) => () => addItemToCart(product)


  return (
    <div>
      <div>
        <button className={style.btnBack} onClick={() => navigate(-1)}>atras</button>
        <div>
          {product.length === 0 ? (<div className={style.loader}></div>)
            : (
              <div className={style.containerG}>
                <div className={style.containerDet}>
                  <h1 className={style.title}> {name}</h1>
                  <h3 className={style.brand}> {brand}</h3>
                  <h2 className={style.title}> ${price}</h2>
                  <h2 className={style.brand}> Rating: {Math.round(rating)} ⭐</h2>
                  <button className={style.btn} onClick={handleItemToCart(product)}>Añadir al Carrito 🛒</button>
                  <p className={style.description}>{description}</p>
                  <h5 className={style.stock}> {stock} unidades disponibles</h5>
                </div>
                <div className={style.containerImg}>
                  <img
                    className={style.img}
                    src={image}
                    alt="Imag no Found"
                    width="250"
                    height="250"
                  />
                </div>
              </div>
            )}
        </div>
        <Comments/>
      </div>
    </div>
  );
}
