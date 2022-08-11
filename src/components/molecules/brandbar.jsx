import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import Apple from '../../assets/apple.png'
import Asus from '../../assets/asus2.png'
import Dell from '../../assets/dell.png'
import Hp from '../../assets/hp.png'
import Jbl from '../../assets/jbl.png'
import Lenovo from '../../assets/lenovo.png'
import Lg from '../../assets/lg.png'
import Samsung from '../../assets/samsung.png'
import style from '../../styles/brandbar.module.css'

const Brandbar = () => {

    const links = [
        {
            to: '/allProducts?name=apple',
            src: Apple,
            value: 'Apple'
        },
        {
            to: '/allProducts?name=asus',
            src: Asus,
            value: 'Asus'
        },
        {
            to: '/allProducts?name=dell',
            src: Dell,
            value: 'Dell'
        },
        {
            to: '/allProducts?name=hp',
            src: Hp,
            value: 'Hp'
        },
        {
            to: '/allProducts?name=jbl',
            src: Jbl,
            value: 'Jbl'
        },
        {
            to: '/allProducts?name=lenovo',
            src: Lenovo,
            value: 'Lenovo'
        },
        {
            to: '/allProducts?name=lg',
            src: Lg,
            value: 'Lg'
        },
        {
            to: '/allProducts?name=samsung',
            src: Samsung,
            value: 'Samsung'
        }
    ]

    return (
        <div>
            <h1 className={style.title}>Mejores Marcas</h1>
            <div className={style.main}>
                {links.map(({ to, src, value }) => (
                    <Link as={ReactLink} to={to} key={value}>
                        <div className={style.item}>
                            <img src={src}
                                alt="Intel"
                                className={style.img}
                                value={value}
                                width='141'
                                height='106' />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Brandbar