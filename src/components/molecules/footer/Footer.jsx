import React from "react";
import style from '../../../styles/footerOne.module.css';
import whatsapp from '../../../assets/whatsapp.png';
import { Link, NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer () {

   
    
    return(
        <div className={style.bgfooter} >
        <div >
            <div className={style.textTitleFooter}>
                Compañia
            </div>
            <div>
                <NavLink to ='/faq'  className={`${style.textTitleFooter2}`}>
                FAQ
                </NavLink>
            </div>
            <div>
                <NavLink to ='/returns' className={`${style.textTitleFooter2}`}>
                Devoluciones
                </NavLink>
            </div>
            <div className={style.textTitleFooter}>
                Legal
            </div>
            <div>
                <NavLink to ='/termsandconditions' className={`${style.textTitleFooter2}`}>
                Terminos y Condiciones
                </NavLink>
            </div>
            <div>
                <NavLink to ='/privacypolicy' className={`${style.textTitleFooter2}`}>
                Politica de Privacidad
                </NavLink>
            </div>
            <div>
                <NavLink  to ='/termsofuse' className={`${style.textTitleFooter2}`}>
                Terminos de Uso
                </NavLink>
            </div>
        </div>

        <div className={style.divAlign}>
            <div className={style.textTitleFooter}>
                Contactanos
            </div>
            <div className={style.texttitle2}>
                info@hardwere.com
            </div>
            <div className={style.texttitle2} >
                1 -234-56780
            </div>

            <div className={style.textTitleFooter}>
                    <Link to='/aboutus' className={`${style.textTitleFooter2}`}>
                    Sobre Nosotros   
                    </Link>
            </div>
            <div className={style.iconsSize}>
                <FaInstagram/> <FaPinterestP/> <FaTiktok/> <FaFacebookF/>
            </div>

        </div>
        <div >
            <label className={style.textTitleFooter} >Mantenete en Contacto</label>
            <form
            >
                
            <input
             className={style.inputBox}
             placeholder='Enter Email' 
             type = 'email'
             required
             > 
             </input>
             
            <input 
            type="submit" 
            value= '✔'
            className={style.inputbtn}
            />
            </form>
            <p className={style.textTitleFooterinfoSize}>
                Al subscribirte a NewHard <br></br>
                aceptas recibir promociones <br></br>
                y mensajes personalizados<br></br>
                automatizados via e-mail</p>
        </div>
        </div>
    )
}