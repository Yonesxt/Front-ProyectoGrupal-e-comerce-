import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function Faq (){
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
        Si no recibiste un artículo que pediste, o si recibiste un producto diferente <br/>
        del que ordenaste, contáctenos y nosotros nos encargamos del resto. <br/>
        </p>
        <br/>
        <p className={styles.aboutText}>
        Las compras realizadas en nuestra web pueden ser devueltas por cualquier motivo hasta 30 días después de la entrega. <br/>
        Lleve el artículo y un recibo válido a cualquier tienda, o comuníquese con <br/>
        info@newhard.com para iniciar el proceso de devolucion.
        </p>
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
        Las compras realizadas en nuestro sitio web pueden devolverse hasta 30 días después de la entrega confirmada para obtener un reembolso <br/>
        en la forma de pago original. <br/>
        Lo sentimos, no podemos reembolsar el costo de envío. Informe sobre productos faltantes, dañados o defectuosos <br/>
        dentro de los 30 días posteriores a la entrega, y reemplazaremos los productos dañados o defectuosos sin cargo adicional.<br/>
        </p>
        <div className={styles.marginDiv}>
            <NavLink to = '/' className={styles.backtohome}>Volver al Home</NavLink>
        </div>
        
        </>
    )
}