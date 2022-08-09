import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
import {
  getProducts,
  createProduct,
  getAllCategories,

} from "../../../../redux/actions";

import style from './ProductCreateAdmin.module.css'


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
  const nav = useNavigate();
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
        description: "",
      })
      redirect()
    }
    else {
      alert("Rellene todos los campos del formulario")
    }
  }
  //useEffect(() => {
  //  dispatch(getAllProducts());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getAllCategories());
  // }, [dispatch]);
  const handleInputBrand = function (e) {
    e.preventDefault();
    if (Object.values(newProduct.brand).includes(e.target.value)) {
      alert("Esta marca ya se encuentra en la lista")
    }
    else if (!e.target.value) {

    }
    else {
      setProduct({
        ...newProduct, brand: [...newProduct.brand, e.target.value]
      });
      let objError = validate({ ...newProduct, [e.target.name]: e.target.value });
      setErrors(objError)
    }
  }
  const handleDeleteBrand = function (e) {
    if (window.confirm(`¿Quiere eliminar la marca: ${e} de la Lista?`)) {
      setProduct({
        ...newProduct,
        brand: newProduct.brand.filter(k => k !== e)
      })
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
        setErrors(validate(newProduct))
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
            <h1 className={style.titleform}>Crear Producto</h1>
            <div className={style.divcell}>
              <label className={style.label1}>Nombre: </label>
              <input
                className={style.input1}
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
              <label className={style.label1}>Descripción: </label>
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
              <label className={style.label1}>Precio: </label>
              <input
                className={style.input1}
                placeholder='Valor del producto'
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
              <label className={style.label1}>Stock: </label>
              <input
                className={style.input1}
                type="number"
                placeholder='Numero de unidades'
                value={newProduct.stock}
                min="1"
                name="stock"
                onChange={(e) => handleInputChange(e)}
                required="required"
              />
              {errors.stock}
            </div>

            <div className={style.divcell}>
              <label className={style.label1}>Imagen: </label>
              <input
                className={style.choose}
                type="file"
                onChange={(e) => {
                  uploadImage(e.target.files);
                }}
              ></input>
              {newProduct.image &&
                <div>
                  <img src={newProduct.image} alt="" width='500px' />
                  <button
                    className={style.x}
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
                <label className={style.label1}>Marca: </label>
                <select required="required" className={style.input1} defaultValue="" name="brand" onChange={(e) => handleInputChange(e)}>
                  <option value=""   > Seleccionar Marca</option>
                  {
                    allBrand?.map((e, i) =>
                      (<option key={i} value={e}>{e}</option>))
                  }
                </select>
                {errors.brand}
              </div>
              <div>
                <label className={style.label1}>Categoria: </label>
                <select className={style.input1} name="categories" defaultValue="" onChange={(e) => handleSelectCat(e)}>
                  <option value="" > Seleccionar categoria</option>
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
                    <button className={style.x} type='button' onClick={() => handleDeleteCategories(d)}>X</button>
                    <li >{d}</li>
                  </div>
                )}
              </ul>
              <div className={style.btndiv}>
                <button type="submit" className={style.btn} onClick={handleSubmit}>
                  Crear
                </button>
                <Link to="/">
                  <button className={style.btn}>Ir Hacia atras</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}