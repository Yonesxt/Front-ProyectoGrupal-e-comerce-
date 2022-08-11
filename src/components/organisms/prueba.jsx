import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Prueba = () => {

    const [call, setCall] = useState(null)

    const url = 'https://dummyjson.com/products'

    const callApi = async () => {
        const rest = await axios(url)
        const data = await rest.data
        const info = await data.products
        setCall(info)
    }

    useEffect(() => {
        callApi()
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {
                call && call.map(({id, title, price, rating, category, stock, images}, index) => (
                    <ul key={index}>
                        <li>id: {id}</li>
                        <li>titulo: {title}</li>
                        <li>stock: {stock}</li>
                        <li>precio: {price}</li>
                        <li>reting: {rating}</li>
                        <li>categoria: {category}</li>
                        <img src={images} />
                    </ul>
                ))
            }
        </div>
    )
}

export default Prueba;