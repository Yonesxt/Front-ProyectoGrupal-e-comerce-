import React, { useEffect, useState } from "react";
import trash from "../../assets/trash2.png";
import style from "../../styles/cart.module.css";
import { useCartContext } from "../../context/CartItem";
import { getProductCart, getTotalPrice } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import swal2 from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const userLoged = useSelector((state) => state.userLoged)

  const { address, postalCode } = userLoged

  const navigate = useNavigate()

  const superState = useCartContext();

  const dispatch = useDispatch()

  const [precio, setPrecio] = useState(true);

  const { addItemToCart, deleteItemToCart, deleteAll } = superState.effects;

  const { products } = superState.state;

  useEffect(() => {
    dispatch(getProductCart(products))
  }, [dispatch, products])

  const handleComprar = () => {
    if (!address || !postalCode) {
      swal2.fire({
        position: 'center',
        icon: 'warning',
        title: 'Es necesario completar tu perfil',
        showConfirmButton: false,
        timer: 1500
    })
      setTimeout(() => navigate('/userprofile'), 3000)
    } else {
      // window.location.reload()
      navigate('/TestAddresForm')
    }
  }

  const totalPricePerProducts = products.map(
    ({ amount, price }) => amount * price
  );

  const totalPrice = totalPricePerProducts.reduce(
    (accum, current) => (accum = accum + current),
    0
  );

  useEffect(() => {
    dispatch(getTotalPrice(totalPrice))
  }, [dispatch, totalPrice]) 

  const handleItemToCart = (product) => () => addItemToCart(product);

  const handleItemToDelete = (product) => () => deleteItemToCart(product);

  const handleItemToDeleteAll = (product) => () => deleteAll(product);

  useEffect(() => {
    if (totalPrice !== 0) {
      setPrecio(totalPrice);
    } else {
      setPrecio(false);
    }
  }, [totalPrice]);

  return (
    <div>
      {totalPrice === 0 ? (
        <div className={style.container}>
          <h2 className={style.h9}>
            <span className={style.span}>CARRITO </span>
            <span className={style.span}>VACIO</span>
          </h2>
        </div>
      ) : (
        <div className={style.wrapper}>
          {products?.map((product) => {
            const { id, image, name, price, amount } = product;
            let amountOfProduct = price * amount;
            return (
              <div className={style.card} key={id}>
                <div className={style.imgDiv}>
                  <img
                    className={style.img}
                    src={image}
                    alt="imagen de producto"
                  />
                </div>

                <div className={style.infoCont}>
                  <h2 className={style.h2}>{name}</h2>
                  <div className={style.addinfo}>
                    <button
                      className={style.btn}
                      onClick={handleItemToDelete(product)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <p>{amount}</p>
                    <button
                      className={style.btn}
                      onClick={handleItemToCart(product)}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <div className={style.price}>
                      <h3>$ {amountOfProduct}</h3>
                    </div>
                    <div className={style.btnTrash}>
                      <button onClick={handleItemToDeleteAll(product)}>
                        <img src={trash} className={style.trash} alt='imagen' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={style.wrapperTotal}>
            <div className={style.space}>
              <p >Precio Total: ${precio}</p>
            </div>
            <div className={style.space}>
              <button className={style.total} onClick={handleComprar}>COMPRAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
