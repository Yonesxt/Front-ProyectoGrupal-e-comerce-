import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberPage } from '../../redux/actions'
import styles from '../../styles/paginado.module.css'

export default function Pagination({paginate}) {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.data)
    const productsPerPage = useSelector((state) => state.productsPerPage)
    

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(data.length/productsPerPage); i++) {
        pageNumber.push(i)
    }



    return(
        <nav className={styles.paginadodiv}>
            <ul className={styles.paginado}>
                { pageNumber && 
                pageNumber.map(number => (
                    <li key={number} className={styles.number}>
                        <button className={styles.btn} onClick={() => dispatch(numberPage((number)))}><span className={styles.span8}>{number}</span><i></i></button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}