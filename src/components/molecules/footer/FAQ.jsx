import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function Faq (){

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <>
        
        <div className={styles.aboutTitle} >FAQ</div>
        <p className={styles.aboutText}>
        ¿Necesitas ayuda o quieres chatear con nosotros? Estamos aquí de lunes a viernes de 8 am a 6 pm <br/>
        Tenga en cuenta que solo estamos disponibles en los teléfonos de lunes a viernes de 8 a. m. a 6 p. m.,, <br/>
        ¡gracias por entender!<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Este e-commerce es ficticio con productos ficticio <br/>
        no se pueden realizar compras en esta pagina <br/>
        </p>
        <br/>
        <br/>
        <p className={styles.aboutText}>
        Nuestro tiempo de procesamiento normal es de 24 a 48 horas para los pedidos realizados durante los días hábiles  <br/>
        (de lunes a viernes, excepto festivos). Pedidos realizados fuera del horario comercial del viernes, <br/>
        durante un fin de semana o un día festivo puede tardar hasta 72 horas en procesarse. Durante eventos especiales, <br/>
        el procesamiento del pedido puede demorar hasta 7 días.<br/>
        Una vez que se haya enviado su pedido, su información de seguimiento se enviará al correo electrónico que nos proporcionó al finalizar la compra. <br/>
        Espere hasta 48 horas para que se actualice su información de seguimiento.<br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Las compras realizadas en nuestro sitio web son ficticias <br/>
         la forma de pago es ficticia. <br/>
        Lo sentimos, no podemos reembolsar . Informe sobre productos faltantes, dañados o defectuosos <br/>
        dentro de los 30 días posteriores a la entrega, y reemplazaremos los productos dañados o defectuosos sin cargo adicional.<br/>
        </p>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Volver al Home</NavLink>
        </div>
        
        </>
    )
}