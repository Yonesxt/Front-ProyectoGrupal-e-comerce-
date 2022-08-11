import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../redux/actions'
import Swal from 'sweetalert2';
import style from '../../styles/userProfile.module.css'

export default function UserProfile() {

    const dispatch = useDispatch()
    const userLoged = useSelector((state) => state.userLoged)
    const [user, setUser] = useState(null)

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(changeProfile(userLoged.id, user))
        Swal.fire({
            title: 'Los cambios fueron guardados',
            confirmButtonText: 'Guardar',
        }).then(() => {
            Swal.fire({
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
        })

    }

    useEffect(() => {
        if (userLoged) {
            Object.keys(userLoged).length > 0 && setUser(userLoged)
        }
    }, [Object.keys(userLoged).length]) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={style.ProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={userLoged.profileImage || user} alt='profile' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                    <label>Nombre</label>
                    <input key='firstname' placeholder='Nombre' value={user?.firstname || ''} type='text' name='firstname' onChange={(e) => handleChange(e)} />

                    <label>Apellido</label>
                    <input key='lastname' placeholder='Apellido' value={user?.lastname || ''} type='text' name='lastname' onChange={(e) => handleChange(e)} />

                    <label>Nombre de usuario</label>
                    <input key='username' placeholder='Nombre de usuario' value={user?.username || ''} type='text' name='username' onChange={(e) => handleChange(e)} />

                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user?.email || ''} type='text' name='email' onChange={(e) => handleChange(e)} disabled />

                    <label>Direccion</label>
                    <input key='address' placeholder='Direccion' value={user?.address || ''} type='text' name='address' onChange={(e) => handleChange(e)} />

                    <label>CP</label>
                    <input key='postalCode' placeholder='Codigo postal' value={user?.postalCode || ''} type='number' name='postalCode' onChange={(e) => handleChange(e)} />
                </div>
                <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}
