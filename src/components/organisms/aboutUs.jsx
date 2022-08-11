import React, { useEffect } from "react";
import rogelio from '../../assets/roge.jpeg';
import bayron from '../../assets/bayron.jpg';
import cris from '../../assets/cristina.jpeg';
import martin from '../../assets/martincho.jpeg';
import fran from '../../assets/fran.jpeg';
import gaston from '../../assets/gaston.jpg';
import cesar from '../../assets/cesar.jpg';
import rodrigo from '../../assets/rodri.jpeg';
import style from '../../styles/aboutUs.module.css'

export default function AboutUs() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <div className={style.div}>
                <h2 className={style.h2}>
                    FrontEnd
                </h2>
            </div>
            <div className={style.container}>

                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={cris} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Cristina Vlassov<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/crisvlasova" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/cristina-mikaela-vlassov-rodiguina-42a0a1236/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://instagram.com/cris_vlasova?igshid=YmMyMTA2M2Y=" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={bayron} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Bayron Murieles<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/Banmugo" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/bayron-andres-murieles-gonzalez-78009b17b" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/invites/contact/?i=1u3tzd0nuq3ok&utm_content=515fmbu" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={martin} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Martin Ojeda<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/OjedaMartin" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/martiniojeda/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/martincho.ojeda/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" rel="noreferrer"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={rogelio} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Rogelio Ramirez<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/Bortosh" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/rogelio-ramirez-carmona/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/invites/contact/?i=1btdlw1jnwu5t&utm_content=28maw06" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={style.div}>
                <h2 className={style.h2}>
                    BackEnd
                </h2>
            </div>

            <div className={style.container}>

                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={fran} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Francisco Mastropierro<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/FranciscoMastropierro" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/francisco-mastropierro-83808633/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/franmastropierro/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={gaston} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Gaston Gonzalez<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/Vanhellsiin" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={cesar} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Cesar Villanueva<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/lordchief21" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/cesar-augusto-villanueva-olivero/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/cesarviilla9/?igshid=YmMyMTA2M2Y%3D" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={rodrigo} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Rodrigo Perez Yones<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/Yonesxt" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/rodrigo-perez-yones/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/rodrigoperezyones/" className={style.a} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}