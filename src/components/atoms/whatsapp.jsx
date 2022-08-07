import React from 'react'
import whatsapp from '../../assets/whatsapp.png';
import style from '../../styles/footer.module.css';
import { NavLink } from "react-router-dom";

export function Whatsapp() {
    const urlWhatsapp = 'https://api.whatsapp.com/send?phone='
    const contactNumber = +573004077114
    const mensaje = "&text=Hola, quisiera comprar algunas cosas."

    return (
        <a target='_blank' href={urlWhatsapp + contactNumber + mensaje}>
                <img className={style.after} src={whatsapp} alt='whatsapp'/>            
        </a>
    )
}