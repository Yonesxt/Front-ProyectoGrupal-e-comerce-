import React, { useEffect } from "react";
import style from '../../../styles/footerOne.module.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const footer = [
        {
            to: '/faq',
            name: 'FAQ',
        },
        {
            to: '/returns',
            name: 'Devoluciones',
        },
        {
            to: '/termsandconditions',
            name: 'Terminos y condiciones',
        },
        {
            to: '/privacypolicy',
            name: 'Politicas de Privacidad'
        },
        {
            to: '/termsofuse',
            name: 'Terminos de uso',
        },
    ]

    return (
        <div className={style.bgfooter} >
            <div className={style.divAlign}>
                {footer.map(t => {
                    return (
                        <Link to={t.to} key={t.name} className={style.textTitleFooter2}>
                            {t.name}
                        </Link>
                    )
                })}
            </div>

            <div className={style.contact}>
                <div className={style.divAlign}>
                    <div className={style.textTitleFooter}>
                        Contactanos via:
                    </div>
                    <a href='mailto:info@hardwere.com' target='_blank' rel='noopener' className={style.texttitle2}>
                        WhatsApp
                    </a>

                    <a href="tel:+05890000111" className={style.texttitle2}>+57 3004077114</a>

                    <Link to='/aboutus' className={style.textTitleFooter3}>
                        Sobre Nosotros
                    </Link>

                    <div className={style.iconsSize}>
                        <FaInstagram /> <FaPinterestP /> <FaTiktok /> <FaFacebookF />
                    </div>

                </div>
            </div>

            <div className={style.contactUs}>
                <label className={style.textTitleFooter} >Mantenete Informado</label>
                <div className={style.inputSubmit}>
                    <input
                        className={style.inputBox}
                        placeholder='Enter Email'
                        type='email'
                        required
                    >
                    </input>

                    <input
                        type="submit"
                        value='Enviar'
                        className={style.inputbtn}
                    />
                </div>

                <p className={style.textTitleFooterinfoSize}>
                    Al subscribirte a Unknown Coder <br></br>
                    aceptas recibir promociones <br></br>
                    y mensajes personalizados<br></br>
                    automatizados via e-mail</p>
            </div>
        </div>
    )
}