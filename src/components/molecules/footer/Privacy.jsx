import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>

            <div className={styles.aboutTitle} >Politica de Privacidad</div>
            <p className={styles.aboutText}>
                Podemos proporcionar avisos de privacidad diferentes o adicionales en relación a ciertas actividades, <br />
                programas y ofertas. También podemos proporcionar avisos adicionales "justo a tiempo" que pueden complementar <br />
                o aclarar nuestras prácticas de privacidad o brindarle opciones adicionales con respecto a su información personal.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                Nuestros sitios web pueden incluir enlaces a sitios web y/o aplicaciones operadas y mantenidas por terceros. <br />
                Tenga en cuenta que no tenemos control sobre las prácticas de privacidad de los sitios web o aplicaciones que no son de nuestra propiedad. <br />
                Le recomendamos que revise las prácticas de privacidad de esos terceros.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                Los tipos de información personal que obtenemos sobre usted dependen de cómo interactúa con nosotros y nuestros productos y servicios. <br />
                Cuando usamos el término "información personal", nos referimos a la información que identifica, se relaciona con, describe, <br />
                o puede estar asociado con usted.<br />
            </p>
            <br />
            <div className={styles.marginDiv}>
                <NavLink to='/' className={styles.backtohome}>Volver al Inicio</NavLink>
            </div>

        </>
    )
}