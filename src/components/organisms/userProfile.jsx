import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile, token } from '../../redux/actions'
import { useAuth0 } from "@auth0/auth0-react";
import swal from 'sweetalert';
import user from '../../assets/user.png'
import style from '../../styles/userProfile.module.css'

export default function UserProfile () {
    
    const u = useAuth0().user
    const dispatch = useDispatch()
    const userLoged = useSelector((state) => state.userLoged)
    const [user, setUser] = useState(null)
    const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()

    function handleChange (e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(changeProfile(userLoged.id, user))

        swal({
            title: "Tu Perfil fue actualizado con exito",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            buttons: {
                cancel: 'ok'
            }
        })
        window.location.reload()
    }

    useEffect(() => {
        if(userLoged) {
            Object.keys(userLoged).length > 0 && setUser(userLoged)
        }
    }, [Object.keys(userLoged).length])

    return (
        <div className={style.ProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={userLoged.profileImage || user} alt='profile-photo' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                    <label>Nombre</label>
                    <input key='firstname' placeholder='Nombre' value={user?.firstname || ''} type='text' name='firstname' onChange={(e) => handleChange(e)}/>

                    <label>Apellido</label>
                    <input key='lastname' placeholder='Apellido' value={user?.lastname || ''} type='text' name='lastname' onChange={(e) => handleChange(e)}/>

                    <label>Nombre de usuario</label>
                    <input key='username' placeholder='Nombre de usuario' value={user?.username || ''} type='text' name='username' onChange={(e) => handleChange(e)}/>

                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user?.email || ''} type='text' name='email' onChange={(e) => handleChange(e)} disabled />
                    
                    <label>Direccion</label>
                    <input key='address' placeholder='Direccion' value={user?.address || ''} type='text' name='address' onChange={(e) => handleChange(e)}/>
                    
                    <label>CP</label>
                    <input key='postalCode' placeholder='Codigo postal' value={user?.postalCode || ''} type='number' name='postalCode' onChange={(e) => handleChange(e)}/>
                </div>
            <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}


// {user && inputs.map(input => {return (
//     <div className={style.labelInput}>
//         <label>{input.placeholder}</label>
//         <input key={input.name} placeholder={input.placeholder} value={input.value || ''} type={input.type} disabled={input.disabled} onChange={(e) => handleChange(e)}/>
//     </div>
// )})}

    // const inputs = [
    //     {
    //         name: 'firstname',
    //         placeholder:'Nombre *',
    //         type: 'text',
    //         disabled: false,
    //     },
    //     {
    //         name: 'lastname',
    //         placeholder:'Apellido *',
    //         type:'text',
    //         disabled: false,
    //     },
    //     {
    //         name:'username',
    //         placeholder:'Nombre de usuario',
    //         type: 'text',
    //         disabled: false,
    //     },
    //     {
    //         name: 'email',
    //         placeholder:'Email',
    //         type: 'text',
    //         disabled: true,
    //     },
    //     {
    //         name: 'address',
    //         placeholder: 'Direccion',
    //         type: 'text',
    //         disabled: false,
    //     },
    //     {
    //         name: 'postalCode',
    //         placeholder: 'Codigo postal',
    //         value: user.postalCode,
    //         type: 'text',
    //         disabled: false,
    //     },
    // ]