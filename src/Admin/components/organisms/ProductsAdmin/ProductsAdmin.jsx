import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  getProducts,
  deleteProduct,
  updateStock,
} from "../../../../redux/actions";
import style from "./ProductsAdmin.module.css";

function ProductsAdmin() {
  const dispatch = useDispatch();
  const [estado, setEstado] = useState({
    stock: "0",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.data);

  function handleChange(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  }

  async function StockHandler(e) {
    try {
      if (estado.stock > 0 && estado.stock < 1000) {
        await dispatch(updateStock(e.id, estado));
        swal("stock has been changed");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        swal("Invalid Stock Number!");
      }
    } catch {
      swal("An error has ocurred, contact the dev");
    }
  }

  function deleteHandler(e) {
    swal({
      title: "Are you sure?",
      text: "Once hidden, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(e.id));
        swal("the product has been deleted!", {
          icon: "success",
        });

        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        swal("Your product is safe!");
      }
    });
  }

  return (
    <div className={style.container}>
      <div className={style.secondaryBar}>
        <Link to="/admin/products/create">
          <button className={style.addbtn}>
            <h3>Crear producto</h3>
          </button>
        </Link>
      </div>
      {products.map((e) => {
        return (
          <div className={style.card} key={e.id}>
            <button
              className={style.DelBtn}
              id={e.id}
              onClick={() => deleteHandler(e)}
            >
              Deshabilitar
            </button>
            <div className={style.ModBtndiv}>
              <Link
                className={style.ModBtnl}
                style={{ textDecoration: "none" }}
                to={`/admin/products/modify/${e.id}`}
              ><button className={style.ModBtn}>
                Modificar</button>
              </Link>
            </div>
            <div className={style.stockdiv}>
              <button
                className={style.stockBtn}
                id={e.id}
                onClick={() => StockHandler(e)}
              >
                Restockear
              </button>
              <input
                className={style.stockinput}
                type="number"
                name="stock"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <p className={style.element}>{e.name.slice(0, 80)}</p>
            <p className={style.element}>{e.brand}</p>
            <p className={style.element}>
              <img className={style.img} src={e.image} alt={e.id} />
            </p>
            <p className={style.element}>${e.price}</p>
            <p className={style.element}> stock: {e.stock}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsAdmin;
