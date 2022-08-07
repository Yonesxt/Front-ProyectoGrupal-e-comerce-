import React, { useEffect, useState } from "react";
import { getCate, getFilterBrand, getFilters, getProducts, numberPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/allProducts.module.css";
import { useNavigate } from "react-router-dom";


export default function Filters() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        "brand": [],
        "categorie": "",
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
            "categorie": "",
            "order": "minor",
            "praice": {
                "min": "",
                "max": ""
            }
        })
    }

    function handleCategory(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            categorie: e.target.value
        });
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

    function handleDelete(e) {
        setInput({
            ...input,
            brand: input.brand.filter(c => c !== e)
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
            {/* ----------- filtro de categorias---------- */}
            <label className={style.row}>
                <p className={style.title}>Categoria</p>
                <select className={style.select} onChange={(e) => handleCategory(e)}>
                    <option value="" >---</option>
                    {
                        allCategories && allCategories.map((item, index) => (
                            <option key={index} value={item} >
                                {item}
                            </option>
                        ))
                    }
                </select>
            </label>
            <br />

            {/* ----------- filtro de marcas ---------- */}

            <label className={style.row}>
                <p className={style.title}>Marca</p>
            </label>
            <select className={style.select} onChange={(e) => handleOrderBrand(e)} >
                <option value="">---</option>
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
            <label className={style.titleColor}>
                Precio:
                <br />
                <label className={style.row}>
                    Min $
                </label>
                <input
                    type="number"
                    name="min"
                    min="0"
                    value={input.praice.min}
                    placeholder='0'
                    onChange={(e) => handleFilterMin(e)}
                />

                <label className={style.row}>
                    Max $
                </label>
                <input
                    type="number"
                    name="max"
                    max="200000"
                    value={input.praice.max}
                    placeholder='200000'
                    onChange={(e) => handleFilterMax(e)}
                />
                <br />
                <div className={style.brandss}>
                    {input.brand.map(c => {

                        return (
                            <div key={c} >
                                <div className={style.brands2}>
                                    <p >{c}</p>
                                    <button className={style.botnX }onClick={() => handleDelete(c)} >x</button>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>

                <button className={style.btn} onClick={(e) => handleSubmit(e)}>Filtrar </button>
                <button className={style.btn} onClick={(e) => { handleCLickRecharge(e) }}>Limpiar Filtros</button>
            </label>

        </div>
    )
}

