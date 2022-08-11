import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { paginacion, getUsersFavorite } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import Filters from "../atoms/Filters";
import FiltersResponsive from "../atoms/FiltersResponsive";

export default function AllProducts() {

  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)
  const productsPerPage = useSelector((state) => state.productsPerPage)
  const indexLastProduct = pages * productsPerPage
  const indexFirstProduct = indexLastProduct - productsPerPage
  const productsToRender = products.slice(indexFirstProduct, indexLastProduct)
  const userLoged = useSelector((state) => state.userLoged)


  useEffect(() => {
    dispatch(paginacion(productsToRender));

      Object.keys(userLoged).length > 0 && dispatch(getUsersFavorite(userLoged.id));

  }, [dispatch, products, pages]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.scrollTo(0,0)
}, [])

  return (
    <>
      <div className={style.filtersResponsive}><FiltersResponsive /></div>
      <Pagination />
      <div className={style.container}>
          <div className={style.div}><Filters /></div>
          <div className={style.cardContainer}><CardProducts /></div>
      </div>
    </>
  );
}
