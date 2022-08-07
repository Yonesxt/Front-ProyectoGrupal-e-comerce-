import React from "react";
import style from '../../styles/notFound.module.css'

export default function NotFound () {

    return (
        <div className={style.container}>
            <h2 className={style.h2}>
                <span className={style.span}>ERROR</span>
                <span className={style.span}>404</span>
            </h2>
        </div>
    )
}