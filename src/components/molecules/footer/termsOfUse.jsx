import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function TermsOfUse() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>

            <div className={styles.aboutTitle} >Termino de Uso</div>
            <p className={styles.aboutText}>
                Todo el diseño, texto, gráficos, logotipos, iconos de botones, imágenes, clips de audio y video, la selección y  <br />
                disposición de los mismos, y todo el software en el Sitio es Copyright (c) NewHard <br />
                RESERVADOS TODOS LOS DERECHOS. La compilación (es decir, la recopilación, arreglo y montaje) de todos los <br />
                El contenido de los Sitios es propiedad exclusiva de Hard y está protegido por <br />
                leyes de derechos de autor. Todo el software utilizado en los Sitios es propiedad de Hard o de sus proveedores de software <br />
                está protegido por las leyes de derechos de autor de EE. UU. e internacionales.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                NewHard.com y todos los encabezados de página, gráficos personalizados e íconos de botones son marcas de servicio, marcas registradas <br />
                Todas las demás marcas comerciales, nombres de productos y nombres de empresas o logotipos citados en este documento son propiedad de sus <br />
                respectivos dueños.<br />
            </p>
            <br />
            <div className={styles.marginDiv}>
                <NavLink to='/' className={styles.backtohome}>Volver al Inicio</NavLink>
            </div>

        </>
    )
}