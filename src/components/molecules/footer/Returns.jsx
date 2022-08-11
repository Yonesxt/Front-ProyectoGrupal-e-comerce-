import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from '../../../styles/footer.module.css';


export default function Returns() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <div className={styles.aboutTitle} >Devoluciones</div>
            <p className={styles.aboutText}>
                Estamos comprometidos a proporcionar productos de calidad a nuestros clientes. Si recibe los productos <br />
                que no cumplan con sus expectativas, devuelva los productos usados ​​en buen estado dentro de los 30 días posteriores a la recepción. <br />
                Actualmente, no podemos ofrecer intercambios. Los artículos comprados en UnknownCoder.com no se pueden devolver o  <br />
                intercambiado en los minoristas que venden nuestros productos.
            </p>
            <br />
            <p className={styles.aboutText}>
                Requerimos todo el contenido del juego o kit original al devolver un juego o kit. <br />
                No se reembolsarán los artículos parciales, y los contenedores vacíos no aceptan reembolso <br />
            </p>
            <br />
            <p className={styles.aboutText}>
                Anote el motivo de su devolución en el anverso de su paquete y envíe el <br />
                producto(s) de vuelta a nosotros usando la etiqueta prepaga incluida en su paquete. Puede dejar su  <br />
                devuelva el paquete en cualquier punto de acceso de USPS o ubicación de FedEx, incluidas las oficinas postales locales, <br />
                buzones de recogida postal, buzones, carteros, oficinas de FedEx, FedEx Authorized ShipCenter®, <br />
                y ubicaciones de FedEx World Service Center®.<br />
            </p>
            <br />
            <p className={styles.aboutText}>
                Una vez que haya llegado su paquete de envio, espere hasta 10 días hábiles procesar su devolucion <br />
                Los reembolsos se emitirán a la forma de pago original por el monto del <br />
                artículo(s) más impuesto sobre las ventas. Todos los reembolsos de tarjetas de regalo electrónicas se procesarán a una nueva tarjeta de regalo electrónica que <br />
                ser enviado por correo electrónico al correo electrónico original del cliente. Los gastos de envío y manipulación no están incluidos en los reembolsos. <br />
                Recibirá un correo electrónico de confirmación de devolución una vez que se haya procesado su reembolso.<br />
            </p>
            <br />
            <div className={styles.marginDiv}>
                <NavLink to='/' className={styles.backtohome}>Volver al Inicio</NavLink>
            </div>

        </>
    )
}