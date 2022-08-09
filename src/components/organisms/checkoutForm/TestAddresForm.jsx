import React, { useState } from "react";
import style from '../../../styles/testAddresform.module.css'
import card from '../../../assets/card_img.png'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../redux/actions";
import swal from 'sweetalert';


const TestAddresForm = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLoged = useSelector((state) => state.userLoged)

    const { firstname, lastname, email, address, postalCode } = userLoged

    const name = `${firstname} ${lastname}`;

    const [confirmar, setConfirmar] = useState(true)

    const [user, setUser] = useState({
        address: userLoged.address,
        postalCode: userLoged.postalCode
    })


    function handleConfirmar(e) {
        e.preventDefault()
        if (!user.address || !user.postalCode) {
            return swal({
                title: "Es necesaria la direccion y codigo postal",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        } else {
            dispatch(changeProfile(userLoged.id, user))
            setConfirmar(false)

        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!user.address || !user.postalCode) {
            swal({
                title: "Es necesaria la direccion y codigo postal",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        } else {
            swal({
                title: "A un solo paso de culminar tu compra",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
            dispatch(changeProfile(userLoged.id, user))
            setTimeout(() => navigate('/TestCheckout'), 2000)
        }
    }

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={style.container}>

            <form action="" className={style.form}>

                <div className={style.row}>

                    <div className={style.col}>

                        <h3 className={style.title}>Dirección de Envío</h3>

                        <div className={style.inputBox}>
                            <span className={style.span}>Tarjetas aceptadas :</span>
                            <img src={card} alt="imagen de tarjetas" className={style.img} />
                        </div>

                        <div className={style.inputBox}>
                            <span className={style.span}>Nombre :</span>
                            <input type="text" placeholder="Nombre" className={style.input} defaultValue={name} />
                        </div>

                        <div className={style.inputBox}>
                            <span className={style.span}>email :</span>
                            <input type="email" placeholder="example@example.com" className={style.input} defaultValue={email} />
                        </div>

                        <div className={style.inputBox}>
                            <span className={style.span}>Direccion :</span>
                            <input type="text" key='address' placeholder="Es necesaria una direccion" className={style.input} defaultValue={user.address || address} name='address' onChange={(e) => handleChange(e)} />
                        </div>

                        <div className={style.inputBox}>
                            <span className={style.span}>ciudad :</span>
                            <input type="text" placeholder="Buenos Aires" className={style.input} />
                        </div>

                        <div className={style.flex}>
                            <div className={style.inputBox}>
                                <span className={style.span}>Pais :</span>
                                <input type="text" placeholder="Argentina" className={style.input} />
                            </div>

                            <div className={style.inputBox}>
                                <span className={style.span}>Codigo postal :</span>
                                <input type="text" key='postalCode' placeholder="Codigo postal" className={style.input} defaultValue={user.postalCode || postalCode} name='postalCode' onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    confirmar
                        ?
                        <button type="submit" className={style.submitBtn} onClick={(e) => handleConfirmar(e)}>
                            Confirmar Datos
                        </button>
                        :
                        <button className={style.submitBtn} onClick={handleSubmit}>
                            Continuar
                        </button>
                }
            </form>
        </div>
    )
}

export default TestAddresForm;