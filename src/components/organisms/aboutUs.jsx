import React from "react";
import rogelio from '../../assets/rogelio.jpeg';
import bayron from '../../assets/bayron.jpg';
import cris from '../../assets/cris.jpg';
import martin from '../../assets/martin.jpg';
import fran from '../../assets/fran.jpg';
import gaston from '../../assets/gaston.jpg';
import cesar from '../../assets/cesar.jpg';
import rodrigo from '../../assets/rodrigoz.jpg';
import style from '../../styles/aboutUs.module.css'

export default function AboutUs() {

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
                        <img className={style.img} src={cris} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Cristina Vlassov<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={bayron} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Bayron Murieles<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={martin} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Martin Ojeda<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={rogelio} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Rogelio Ramirez<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
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
                        <img className={style.img} src={fran} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Francisco Mastropierro<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={gaston} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Gaston Gonzalez<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={cesar} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Cesar Villanueva<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imgBx}>
                        <img className={style.img} src={rodrigo} />
                    </div>
                    <div className={style.content}>
                        <h3 className={style.h3}>Rodrigo Yones<br /><span className={style.span}>FullStack Developer</span></h3>
                        <ul className={style.sci}>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-github"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className={style.li}><a href="#" className={style.a}><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}