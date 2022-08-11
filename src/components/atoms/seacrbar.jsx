import React from 'react';
import { useState } from 'react';
import search from '../../assets/search.jpg'
import { getProductByName } from '../../redux/actions';
import style from '../../styles/searchbar.module.css'
import {connect} from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function SearchBar ({searchedProducts, getProductByName}) {
    // eslint-disable-next-line
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
        navigate(`/allProducts?name=${value}`)
    }

    return (
        <div className={style.searchbarGeneralContainer}>
            <form className={style.searchbarContainer} onSubmit={(e)=>handleClick(e)}>
                <input key='searchbar' placeholder='buscar...' value={value} onChange={e => setValue(e.target.value)}/>
                <button type='submit'><img src={search} alt='search-button'/></button>
            </form>
            <div className={style.productsBox}>
                {value && searchedProducts.map(p => { return (
                    <Link to={`/details/${p.id}`}>
                        <li onClick={() => setValue('')}>{p.name}</li>
                    </Link>
                )})}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        searchedProducts: state.searchedProducts
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getProductByName: (name) => dispatch(getProductByName(name))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)