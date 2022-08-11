import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
import logoutt from '../../assets/logout.png';
import loginn from '../../assets/login.png';
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from '../../context/CartItem';
import UserMenu from '../atoms/UserMenu';


export function SidebarOptions(props) {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const handleSubmit = () => user ? logout() : loginWithRedirect()
    const log = isAuthenticated? 'Salir' : 'Iniciar sesion'
    const photo = isAuthenticated? logoutt : loginn

    let loc = useLocation().pathname

    const superState = useCartContext()
    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

    const links = [
        {
            to: '/',
            name: 'inicio',
            src: home,
            styleClass: loc === '/' ? style.onPath : ''
        },
        {
            to: '/allProducts',
            name: 'Productos',
            src: keyboard,
            styleClass: loc === '/allProducts' ? style.onPath : ''
        },
        {
            to: '/cart',
            name: 'Carrito',
            src: cart,
            styleClass: style.cartItems,
            cartNumber: cachearNumber
        }
    ]
    
    return (
        <div className={style.options}>
                {isAuthenticated && (
                    <span className={style.span}>Hola {user.given_name} {user.family_name}!</span>
                )}
                {links.map(({ to, name, src, styleClass, cartNumber }) => (
                    <Link to={to} className={style.link} key={name}>
                        <div className={style.linkWrapper}>
                            <img src={src} alt={name} />
                            <span className={styleClass}>
                                {name === 'Carrito' ? cartNumber : name}
                            </span>
                        </div>
                        {name === 'Carrito' && (
                            <span className={loc === '/cart' ? style.onPath : ''}>Carrito</span>
                        )}
                    </Link>
                ))}

                <button onClick={handleSubmit} className={style.link}>
                    <img src={photo} alt='login'/>
                    <span>{log}</span>
                </button>

            {isAuthenticated && <UserMenu
            id={props.id} isAdmin={props.isAdmin} />}
        </div>

    )
}





