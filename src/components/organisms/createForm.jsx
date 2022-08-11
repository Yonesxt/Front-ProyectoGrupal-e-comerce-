import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  createProduct
} from "../../redux/actions";

import style from '../../styles/createForm.module.css'
import Axios from 'axios';
export function validate(newProduct) {
  let errors = {};

  if (!newProduct.name) {
    errors.name = 'Nombre requerido';
  } if (newProduct.name.length < 4) {
    errors.name = 'Nombre mayor a 4 caracteres';
  } if (!newProduct.price) {
    errors.price = `Precio requerido`;
  } if (newProduct.price <= 0) {
    errors.price = `El precio no puede ser nulo`;
  } if (!newProduct.brand) {
    errors.brand = 'Seleccione un brand';
  } if (!newProduct.categories) {
    errors.categories = 'Seleccione una categoria';
  } if (newProduct.image === "") {
    errors.image = 'Inserte imagen';
  } if (newProduct.stock < 0) {
    errors.stock = 'El stock no puede ser nulo';
  } if (!newProduct.stock) {
    errors.stock = 'Ingresar stock';
  } if (newProduct.rating === "" || newProduct.rating > 5 || newProduct.rating < 0) {
    errors.rating = 'Ingresar un rango entre 1 y 5';
  } if (newProduct.description === "") {
    errors.description = 'Descripcion es requerida';
  }
  return errors;
};
function redirect() {
  window.location.href = "/";
}
export default function CreateForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.data);
  const [errors, setErrors] = React.useState({});

  const [newProduct, setProduct] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    categories: [],
    stock: "",
    rating: "",
    description: "",
  });
  // crea un set de brands para el select 
  const setBrand = [];
  products.map((e) => setBrand.push(e.brand));
  let allBrand = [...new Set(setBrand)];
  const category = []

  products.map((e) => category.push(e.Categories[0]?.name))
  let setCat = [...new Set(category)]

  const handleInputChange = function (e) {

    setProduct({
      ...newProduct, [e.target.name]: e.target.value
    });
    let objError = validate({ ...newProduct, [e.target.name]: e.target.value });
    setErrors(objError)
  }

  function handleSelectCat(e) {
    if (Object.values(newProduct.categories).includes(e.target.value)) {
      alert("Esta categoria ya se encuentra en la lista")
    }
    else if (!e.target.value) {

    }
    else {
      setProduct({
        ...newProduct,
        categories: [...newProduct.categories, e.target.value]
      });
      setErrors(validate({
        ...newProduct,
        categories: [e.target.value]
      }));
    }
  }


  const handleSubmit = function (e) {
    e.preventDefault();
    setErrors(validate(setProduct))
    if (Object.keys(errors).length === 0 && newProduct.categories.length > 0) {
      dispatch(createProduct(newProduct));
      setProduct({
        name: "",
        brand: "",
        image: "",
        price: "",
        categories: [],
        stock: "",
        rating: "",
        description: "",
      })
      redirect()
    }
    else {
      alert("Rellene todos los campos del formulario")
    }
  }

  const handleDeleteCategories = function (e) {
    if (window.confirm(`¿Quiere eliminar la marca: ${e} de la Lista?`)) {
      setProduct({
        ...newProduct,
        categories: newProduct.categories.filter(k => k !== e)
      })
    }
  }

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'ecommercegrupo05');
    const newAxios = Axios.create();
    newAxios
      .post('https://api.cloudinary.com/v1_1/deaf0qceq/image/upload', formData)
      // eslint-disable-next-line no-loop-func
      .then((res) => {
        setProduct({
          ...newProduct,
          image: res.data.secure_url,
        });
        setErrors(validate(setProduct))
      });
  }

  function handleDeleteImage(e) {
    e.preventDefault();
    setProduct({
      ...newProduct,
      image: "",
    });
  }
  return (
    <div className={style.backg}>
      <div className={style.wrapper}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h1 className={style.titleform}>Create New Product</h1>
            <div className={style.divcell}>
              <label className={style.label1}>Name: </label>
              <input
                value={newProduct.name}
                placeholder="Nombre producto"
                autoComplete="off"
                onChange={(e) => handleInputChange(e)}
                pattern="[A-Za-z0-9_-]{4}"
                required="required"
                type="text" name='name'
              />
              {errors.name}
            </div>
            <div className={style.divcell}>
              <label className={style.label1}>Description: </label>
              <input
                className={style.input1}
                placeholder="Descripcón del producto"
                type="text"
                value={newProduct.description}
                name="description"
                onChange={(e) => handleInputChange(e)}
                required="required"
              />
              {errors.description}
            </div>
            <div className={style.divcell}>
              <label className={style.label1}>Price: </label>
              <input
                className={style.input1}
                placeholder='Valor del producto en Dolares'
                type="number"
                value={newProduct.price}
                min="0"
                name="price"
                onChange={(e) => handleInputChange(e)}
                required="required"
              />
              {errors.price}
            </div>
            <div className={style.divcell}>
              <label className={style.label1}>stock: </label>
              <input
                className={style.input1}
                type="number"
                value={newProduct.stock}
                min="1"
                name="stock"
                onChange={(e) => handleInputChange(e)}
                required="required"
              />
              {errors.stock}
            </div>
            <div className={style.divcell}>
              <label value="0" className={style.label1}>Rating: </label>
              <input
                className={style.input1}
                type="number"
                placeholder='Popularidad del Producto'
                value={newProduct.rating}
                min="0"
                max="5"
                name="rating"
                onChange={(e) => handleInputChange(e)}
                required="required"
              />
              {errors.rating}
            </div>
            <div className={style.divcell}>
              <label className={style.label1}>Image: </label>
              <input
                className={style.input1}
                type="file"
                onChange={(e) => {
                  uploadImage(e.target.files);
                }}
              ></input>
              {newProduct.image &&
                <div>
                  <img src={newProduct.image} alt="" width='500px' />
                  <button
                    name={newProduct.image}
                    onClick={(name) => handleDeleteImage(name)}
                  >
                    X
                  </button>
                </div>
              }
              {errors.image}
            </div>
            <div>
              <div>
                <label className={style.label1}>Brand: </label>
                <select required="required" className={style.input1} defaultValue="" name="brand" onChange={(e) => handleInputChange(e)}>
                  <option value=""   > Select Brand</option>
                  {
                    allBrand?.map((e, i) =>
                      (<option key={i} value={e}>{e}</option>))
                  }
                </select>
                {errors.brand}
              </div>
              <div>
                <label className={style.label1}>Category: </label>
                <select className={style.input1} name="categories" defaultValue="" onChange={(e) => handleSelectCat(e)}>
                  <option value="" > Select Category</option>
                  {setCat?.map((e, i) => (
                    <option className={style.input1} key={i} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {errors.categories}
              </div>
              <ul>
                {newProduct.categories.map((d, i) =>
                  <div key={i}>
                    <button type='button' onClick={() => handleDeleteCategories(d)}>X</button>
                    <li >{d}</li>
                  </div>
                )}
              </ul>
              <div>
                <button type="submit" className={style.btn} onClick={handleSubmit}>
                  Create
                </button>
                <Link to="/">
                  <button className={style.btn}>Go Back</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}