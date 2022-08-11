import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function Terms() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <div className={styles.aboutTitle} >Terminos y condiciones</div>
            <p className={styles.aboutText}>
                UnknownCoder proporciona el contenido y los servicios disponibles en el sitio web sujeto a lo siguiente <br />
                términos y condiciones (“Términos y Condiciones”). Lea atentamente estos Términos y condiciones <br />
                antes de usar el sitio web. Si no está de acuerdo con estos Términos y condiciones, no utilice nuestro sitio web.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                Revise nuestra Política de privacidad, que también rige su visita al sitio web, para obtener detalles sobre qué <br />
                información que recopilamos y cómo la usamos. Esta política explica cómo tratamos su información personal,  <br />
                y cómo protegemos su privacidad cuando utiliza el Servicio. Usted acepta el uso de sus datos en <br />
                de acuerdo con nuestra Política de Privacidad.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                La información comunicada en el Sitio Web constituye una comunicación electrónica. Cuando te comunicas con  <br />
                nosotros a través del sitio web o a través de otras formas de medios electrónicos, como el correo electrónico, se comunica  <br />
                con nosotros electrónicamente. Usted acepta que podemos comunicarnos electrónicamente, sujeto a las leyes locales de privacidad y antispam,  <br />
                y que tales comunicaciones, así como avisos, divulgaciones, acuerdos y otras comunicaciones que proporcionamos <br />
                electrónicamente, son equivalentes a las comunicaciones por escrito y tendrán la misma fuerza y ​​efecto que   <br />
                si fueran por escrito y firmados por el remitente de la comunicación. <br />
            </p>
            <br />
            <div className={styles.marginDiv}>
                <NavLink to='/' className={styles.backtohome}>Volver al Inicio</NavLink>
            </div>

        </>
    )
}