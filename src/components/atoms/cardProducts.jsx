import React from "react";
import { useSelector } from "react-redux";
import style from '../../styles/cardProducts.module.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartItem';
import Fav from "./Fav"
//favorites

export default function CardProducts() {
    const superState = useCartContext()

    const { addItemToCart } = superState.effects

    const productsToRender = useSelector((state) => state.productsToRender)

    if (!productsToRender.length) return <div className={style.loader}></div>
    // if (!productsToRender.length) return <h1>no hemos encontrado los productos que buscaste</h1>

    const handleItemToCart = (product) => () => addItemToCart(product)

    return (
        <div className={style.cardWrapper}>
            {
                productsToRender?.map((product, index) => {
                    const { id, image, name, price } = product
                    return (
                        <div className={style.card} key={index}>
                            <Fav id={id}/>
                                

                            <div className={style.imgDiv}>
                                <img className={style.img} src={image} alt="imagen de producto" />
                            </div>
                            <h2 className={style.h2}>{name}</h2>
                            <br />
                            <div className={style.price}>$<h3>{price}</h3></div>
                            <Link to={`/details/${id}`} className={style.btn}>
                                <button>
                                    Detalles
                                </button>
                            </Link>
                            <Link to='#' onClick={handleItemToCart(product)} className={style.btn}>
                                <button>
                                    Añadir al Carrito 🛒
                                </button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
