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
                RESERVADOS TODOS LOS DERECHOS. La compilación (es decir, la recopilación, arreglo y montaje) de todos los <br />
                El contenido de los Sitios es propiedad exclusiva y está protegido por <br />
                leyes de derechos de autor. <br />
            </p>
            <br />
            <p className={styles.aboutText}>
                UnknownCoder.com y todos los encabezados de página, gráficos personalizados e íconos de botones son marcas de servicio, marcas registradas <br />
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