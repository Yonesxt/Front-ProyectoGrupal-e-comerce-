import React from "react";
import style from '../../styles/footer.module.css';
import whatsapp from '../../assets/whatsapp.png';
import { Link, NavLink } from "react-router-dom";

export default function Footer () {

    const categorias = ['Placas de Video', 'Procesadores', 'Memorias', 'Almacenamiento', 'Refrigeración', 'Todas las categorías'];
    const marcas = ['Intel', 'AMD', 'Asus', 'Nvidia', 'Genesis', 'Asrock', 'Pny', 'Oloy'];
    const loMasBuscado = ['Placas de Video Nvidia', 'Placas de Video AMD', 'Gabinetes', 'Monitores', 'Teclado Mecánico', 'Mouse Gamer'];
    const ayuda = ['Whatsapp', 'FAQ', 'Trámite Garantía', 'Boton de Arrepentimiento']
    
    return (
        <div className={style.footerGeneralContainer}>
            <div className={style.footerContainer}>
                <div className={style.innerContainer}>
                    <h3 className={style.title}>Categorias</h3>
                    {categorias.map(cat => { return ( <h3 className={style.subCategories} key={cat}>{cat}</h3> )})}
                </div>
                <div className={style.innerContainer}>
                    <h3 className={style.title}>Marcas</h3>
                    {marcas.map(m => { return ( <h3 className={style.subCategories} key={m}>{m}</h3> )})}
                </div>
                <div className={style.innerContainer}>
                    <h3 className={style.title}>Lo mas buscado</h3>
                    {loMasBuscado.map(p => { return ( <h3 className={style.subCategories} key={p}>{p}</h3> )})}
                </div>
                <div className={style.innerContainer}>
                    <h3 className={style.title}>Ayuda</h3>
                    {ayuda.map(a => { return ( <h3 className={style.subCategories} key={a}>{a}</h3> )})}
                </div>
                <div className={style.innerContainer}>
                    <Link to='/aboutus'>
                        <h3 className={style.title}>About Us</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}