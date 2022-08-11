import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getOrderById } from "../../../../redux/actions";
import {  useParams } from "react-router-dom";
import style from "./OrderDetailAdmin.module.css"

export default function OrderDetailAdmin (){
    const dispatch = useDispatch()
    const {id} = useParams()

useEffect(() => {
    dispatch(getOrderById(id))
    }, [dispatch]) //eslint-disable-line react-hooks/exhaustive-deps

    const allorder = useSelector((state)=> state.allOrders)
    const order = allorder.filter((e)=>(e.id===id))
    console.log(order)

    return(
        <div className={style.container}>
                {order && (
                    <div className={style.card}>
                        <h1 className={style.title}> Detalle Orden </h1>
                        <h4 className={style.littleinfo}>{order[0].date.slice(0,10)} | #{order[0].id}</h4>  
                        <div className={style.infocontainer}> 
                            <h3 className={style.info}>Direccion de envio: Direccion: {order[0].User.address}</h3>                
                            <h3 className={style.info}>Email del usuario: {order[0].User.email}</h3>                
                            <h3 className={style.info}>Productos totales: {order[0].Products.map((e)=> {return e.Products_Orders.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h3>
                        </div>
                        {order[0].Products.map((products)=>{
                            return(<div className={style.divListItem}>
                                        <div>
                                        <img className={style.image} src={products.image} alt="Not found" ></img>
                                        </div>
                                        <div className={style.itemcont}>
                                        <h1 className={style.itemText}>{products.name}</h1>
                                        <h1 className={style.itemText}>{products.brand}</h1>    
                                        </div>
                                        <div className={style.billingInfo}>
                                        <h1 className={style.billingText}> Precio unitario: ${products.Products_Orders.unitPrice}</h1>
                                        <h1 className={style.billingText}> Productos Comprados: {products.Products_Orders.quantity}</h1>
                                        <h1 className={style.billingText}> Subtotal: ${products.Products_Orders.unitPrice * products.Products_Orders.quantity}</h1>    
                                        </div>
                                </div>
                            )
                            
                        })}
                        <h2 className={style.totalPrice}>Precio Total: ${order[0].amount}</h2>
                    </div>
                )})
        </div>
        )
}
