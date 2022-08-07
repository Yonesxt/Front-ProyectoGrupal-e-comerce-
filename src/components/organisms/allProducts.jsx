import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, paginacion } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import { useLocation } from "react-router-dom";
import Filters from "../atoms/Filters";

export default function AllProducts() {

  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)
  const productsPerPage = useSelector((state) => state.productsPerPage)
  
  const indexLastProduct = pages * productsPerPage
  const indexFirstProduct = indexLastProduct - productsPerPage

  const productsToRender = products.slice(indexFirstProduct, indexLastProduct)


  // const loc = useLocation()
  // let loc2 = loc.search.slice(6)

  // useEffect(() => {
  //   dispatch(getProducts(loc2))
  // }, [loc]) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(paginacion(productsToRender));
  }, [dispatch, products, pages]);

  return (
    <>
      <Pagination />
      <div className={style.container}>
        <div className={style.filters}>
          <div className={style.div}><Filters /></div>
          <div className={style.cardContainer}><CardProducts /></div>
        </div>
      </div>
    </>
  );
}
