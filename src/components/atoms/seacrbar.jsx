import React from 'react';
import { useState } from 'react';
import search from '../../assets/search.jpg'
import { getProductByName, paginacion } from '../../redux/actions';
import style from '../../styles/searchbar.module.css'
import {connect } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function SearchBar ({searchedProducts, getProductByName, paginacion}) {

    const [products, setProducts] = useState('')
    const [value, setValue] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        getProductByName(value)
        setProducts(searchedProducts)
    }, [value]) //eslint-disable-line react-hooks/exhaustive-deps

    function handleClick (e) {
        e.preventDefault()
        setValue('')
        paginacion(products)
        navigate(`/allProducts?name=${value}`)
    }

    return (
        <div className={style.searchbarGeneralContainer}>
            <form className={style.searchbarContainer} onSubmit={(e)=>handleClick(e)}>
                <input key='searchbar' placeholder='buscar...' value={value} onChange={e => setValue(e.target.value)}/>
                <button type='submit'><img src={search} alt='search-button'/></button>
            </form>
            <div className={style.productsBox}>
                {value && searchedProducts.map((p, index) => { return (
                    <Link to={`/details/${p.id}`} key={index}>
                        <li onClick={() => setValue('')}>{p.name}</li>
                    </Link>
                )})}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        productsToRender: state.productsToRender,
        searchedProducts: state.searchedProducts
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductByName: (name) => dispatch(getProductByName(name)),
        paginacion: (name) => dispatch(paginacion(name))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)