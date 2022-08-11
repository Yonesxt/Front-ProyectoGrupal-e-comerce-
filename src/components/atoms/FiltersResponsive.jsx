import React, { useEffect, useState } from "react";
import { getCate, getFilterBrand, getFilters, getProducts, numberPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from '../../styles/FiltersResponsive.module.css'

export default function FiltersResponsive () {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        "brand": [],
        "categorie": [],
        "order": "minor",
        "praice": {
            "min": "",
            "max": ""
        }
    })

    const data = useSelector((state) => state.filterBrands)
    const cate = useSelector((state) => state.cate)
    const brandRepeat = data.map(e => e).sort()
    const brands = [...new Set(brandRepeat)]
    const allCategories = cate.map(e => e.name).sort()

    let navigate = useNavigate()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCate())
        dispatch(getFilterBrand())
    }, [dispatch])

    function handleCLickRecharge(e) {
        window.location.reload()
        dispatch(getProducts())
        dispatch(getCate())
        dispatch(numberPage(1))
        navigate('/allProducts')
        setInput({
            "brand": [],
            "categorie": [],
            "order": "minor",
            "praice": {
                "min": "",
                "max": ""
            }
        })
    }

    function handleCategory(e) {
        e.preventDefault(e);
        if (input.categorie.includes(e.target.value)) {
            return
        } else {
            setInput({
                ...input,
                categorie: [...input.categorie, e.target.value]
            })
        }
    }

    function handleOrderBrand(e) {
        e.preventDefault(e);
        if (input.brand.includes(e.target.value)) {
            return
        } else {
            setInput({
                ...input,
                brand: [...input.brand, e.target.value]
            })
        }
    }

    function handleDeleteBrand(e) {
        setInput({
            ...input,
            brand: input.brand.filter(c => c !== e)
        })
    }

    function handleDeleteCategorie(e) {
        setInput({
            ...input,
            categorie: input.categorie.filter(c => c !== e)
        })
    }

    function handleFilterMin(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: e.target.value,
                max: input.praice.max
            }
        });
    }

    function handleFilterMax(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: input.praice.min,
                max: e.target.value
            }
        });
    }


    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(getFilters(input));
        dispatch(numberPage(1))
    }

    return (
        <div>
        <div className={style.filterContainer}>

            {/* ----------- filtro de categorias---------- */}
                <select className={style.select} onChange={(e) => handleCategory(e)}>
                    <option value=""  default="true" disabled>Categorias</option>
                    {
                        allCategories && allCategories.map((item, index) => (
                            <option key={index} value={item} >
                                {item}
                            </option>
                        ))
                    }
                </select>
            <br />

            {/* ----------- filtro de marcas ---------- */}

            <select className={style.select} onChange={(e) => handleOrderBrand(e)} >
                <option value="" default="true" disabled>Marcas</option>
                {
                    brands && brands.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>
            <br />

            {/* ----------- filtro de precio ---------- */}
                <input
                    type="number"
                    name="min"
                    min="0"
                    value={input.praice.min}
                    placeholder='Min'
                    onChange={(e) => handleFilterMin(e)}
                />

                <input
                    type="number"
                    name="max"
                    max="200000"
                    value={input.praice.max}
                    placeholder='Max'
                    onChange={(e) => handleFilterMax(e)}
                />
                <br />

                <button className={style.btn} onClick={(e) => handleSubmit(e)}>Filtrar </button>
                <button className={style.btn} onClick={(e) => { handleCLickRecharge(e) }}>Limpiar Filtros</button>
        </div>
        <div className={style.filters}>
            <div className={style.brandss}>
                    {input.categorie.map(c => {

                        return (
                            <div key={c} >
                                <div className={style.brands2}>
                                    <p >{c}</p>
                                    <button className={style.botnX} onClick={() => handleDeleteCategorie(c)} >✖</button>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>  
            <div className={style.brandss}>
                {input.brand.map(c => {
                    return (
                        <div key={c} >
                            <div className={style.brands2}>
                                <p>{c}</p>
                                <button className={style.botnX} onClick={() => handleDeleteBrand(c)} >✖</button>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    </div>
    )
}