import React, { useEffect } from "react";
import rogelio from '../../assets/rogelio.jpeg';
import bayron from '../../assets/bayron.jpg';
import cris from '../../assets/cristina.jpeg';
import martin from '../../assets/martin.jpg';
import fran from '../../assets/fran.jpg';
import gaston from '../../assets/gaston.jpg';
import cesar from '../../assets/cesar.jpg';
import rodrigo from '../../assets/rodrigoz.jpg';
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
                            <li className={style.li}><a href="https://github.com/crisvlasova" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/cristina-mikaela-vlassov-rodiguina-42a0a1236/" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/crisvlasova/" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="https://github.com/Bortosh" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/rogelio-ramirez-carmona/" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="https://github.com/FranciscoMastropierro" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/francisco-mastropierro-83808633/" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/franmastropierro/" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
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
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={rodrigo} alt='alterno'/>
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Rodrigo Perez Yonez<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="https://github.com/Yonesxt" className={style.a} target="_blank"><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="https://www.linkedin.com/in/rodrigo-perez-yones/" className={style.a} target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="https://www.instagram.com/rodrigoperezyones/" className={style.a} target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}