import React, {useEffect} from 'react';
import logo from '../../assets/coder2.png'
import SearchBar from '../atoms/seacrbar.jsx'
import {SidebarOptions} from '../atoms/sidebaroptions.jsx'
import style from '../../styles/navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { token } from '../../redux/actions';
// import { Switch } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar () {
    const dispatch = useDispatch()
    const userLoged = useSelector((state) => state.userLoged)

    const { isAuthenticated, getAccessTokenSilently, isLoading, user } = useAuth0()

    useEffect(() => {
        if(!isLoading && isAuthenticated){
            getAccessTokenSilently().then(tok =>{
                dispatch(token(tok, user))
            })
        }
        // console.log('usuario logueado', userLoged)
        // console.log('no hay token :(')
    }, [isLoading, isAuthenticated, Object.keys(userLoged).length])

    return (
        <div className={style.navbarContainer}>
            <div className={style.switchSearch}>
            <Link to='/'>
                <img src={logo} alt='logo'className={style.logo}/>
            </Link>
                <SearchBar/>
                {/* <Switch colorScheme='blackAlpha' size='lg'/> */}
            </div>
            <SidebarOptions id={userLoged.id}/>
        </div>
    )
}