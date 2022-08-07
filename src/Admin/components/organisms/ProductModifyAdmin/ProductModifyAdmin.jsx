import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from 'axios';
   import {
    getProducts,
    updateProduct

   } from "../../../../redux/actions";

import style from './ProductModifyAdmin.module.css'


export function validate(update) {
  let errors = {};

  if (!update.name) {
    errors.name = 'Nombre requerido';
  } if (update.name.length < 4) {
    errors.name = 'Nombre mayor a 4 caracteres';
  } if (!update.price) {
    errors.price = `Precio requerido`;
  } if (update.price <= 0) {
    errors.price = `El precio no puede ser nulo`;
  } if (!update.brand) {
    errors.brand = 'Seleccione un brand';
  } if (!update.categories) {
    errors.categories = 'Seleccione una categoria';
  } if (update.image === "") {
    errors.image = 'Inserte imagen';
  } if (update.stock < 0) {
    errors.stock = 'El stock no puede ser nulo';
  } if (!update.stock) {
    errors.stock = 'Ingresar stock';
  } if (update.rating === "" || update.rating > 5 || update.rating < 0) {
    errors.rating = 'Ingresar un rango entre 1 y 5';
  } if (update.description === "") {
    errors.description = 'Descripcion es requerida';
  }
  return errors;
};
function redirect() {
  window.location.href = "/admin/products";
}
export default function CreateForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.data);
  const [errors, setErrors] = React.useState({});

  //Modify
  const {id} = useParams()

  let selectedProduct = products.filter((item)=> item.id === id)

  


  const [update, setProduct] = useState({
    name: selectedProduct[0].name ,
    brand: selectedProduct[0].brand,
    image: selectedProduct[0].image,
    price: selectedProduct[0].price,
    categories: [selectedProduct[0].Categories[0].name] ,
    stock: selectedProduct[0].stock,
    rating: selectedProduct[0].rating,
    description: selectedProduct[0].description,
  });
  
  console.log("this", update)
  // crea un set de brands para el select 
  const setBrand = [];
  products.map((e) => setBrand.push(e.brand));
  let allBrand = [...new Set(setBrand)];
  const category = []
  
  products.map((e) => category.push(e.Categories[0]?.name))
  let setCat = [...new Set(category)]
  console.log( "setcat" ,setCat)

  const handleInputChange = function (e) {

    setProduct({
      ...update, [e.target.name]: e.target.value
    });
    let objError = validate({ ...update, [e.target.name]: e.target.value });
    setErrors(objError)
  }



  const handleSubmit = function (e) {
    e.preventDefault();
    setErrors(validate(setProduct))
    if (Object.keys(errors).length === 0 && update.categories.length > 0) {
  
      dispatch(updateProduct(id , update));
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
  //useEffect(() => {
  //  dispatch(getAllProducts());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getAllCategories());
  // }, [dispatch]);
  const handleInputBrand = function (e) {
    e.preventDefault();
    if (Object.values(update.brand).includes(e.target.value)) {
      alert("Esta marca ya se encuentra en la lista")
    }
    else if (!e.target.value) {

    }
    else {
      setProduct({
        ...update, brand: [...update.brand, e.target.value]
      });
      let objError = validate({ ...update, [e.target.name]: e.target.value });
      setErrors(objError)
    }
  }
  const handleDeleteBrand = function (e) {
    if (window.confirm(`¿Quiere eliminar la marca: ${e} de la Lista?`)) {
      setProduct({
        ...update,
        brand: update.brand.filter(k => k !== e)
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
          ...update,
          image: res.data.secure_url,
        });
        setErrors(validate(update))
      });

  }

  function handleDeleteImage(e) {
    e.preventDefault();
    setProduct({
      ...update,
      image: "",
    });
  }
  return (
    <div className={style.backg}>
      <div className={style.wrapper}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h1 className={style.titleform}>Modificar Producto</h1>
            <div className={style.divcell}>
              <label className={style.label1}>Nombre: </label>
              <input
                className={style.input1}
                value={update.name}
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
              <textarea
                className={style.input2}
                placeholder="Descripcón del producto"
                type="text"
                value={update.description}
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
                value={update.price}
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
                value={update.stock}
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
                  title=" "
                  onChange={(e) => {
                    uploadImage(e.target.files);
                  }}
                ></input>
                {update.image &&
                  <div>
                    <img className={style.img} src={update.image} alt="" width='400px' />
                    <button
                      className={style.x}
                      name={update.image}
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
                  <option value={selectedProduct[0].brand} selected > {selectedProduct[0].brand}</option>
                  {
                    allBrand?.filter((item)=>item !== selectedProduct[0].brand).map((e, i) =>
                      (<option key={i} value={e}>{e}</option>))
                  }
                </select>
                {errors.brand}
              </div>                          
              <div className={style.btndiv}>
                <button type="submit" className={style.btn} onClick={handleSubmit}>
                  Modificar
                </button>
                <Link to="/admin/products">
                  <button className={style.btn}>Ir Hacia Atrás</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}