import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getOrderById } from "../../../../redux/actions";
import {  useParams } from "react-router-dom";
import style from "./OrderDetailAdmin.module.css"
import { GoCheck } from "react-icons/go"
import swal from "sweetalert";


export default function OrderDetailAdmin (){
    const dispatch = useDispatch()
    const {id} = useParams()
    
   
   useEffect(() => {
       dispatch(getOrderById(id))
    }, [])
    
   const order = useSelector((state)=> state.currentOrder)    
 
   

   const [state, setState] = useState("")
    

    function handleSelect(e){
      e.preventDefault()
      setState(e.target.value) 

      console.log(state)   
    }
    function handleClick(e){
        e.preventDefault()  
//        dispatch(updateOrderState(id,state))
        swal("Order status has been changed")
        setTimeout(() => {
            window.location.reload()
            }, 1000);
    }


    return(
           <div className={style.container}>

                


                {order && (
                    <div className={style.card}>
                        <h1 className={style.title}> Detalle Orden </h1>
                        <h4 className={style.littleinfo}>{order.date.slice(0,10)} | #{order.id}</h4>  
                        <div className={style.infocontainer}> 
                            <div className={style.orderState}>
                                <h3 className={style.info}>Estado: {order.state}  </h3>    
                                   <button className={style.ModBtn} onClick={e=>handleClick(e)}><GoCheck/></button>      
                            </div>                                  
                            <h3 className={style.info}>Direccion de envio: Direccion: {order.User.address}</h3>                
                            <h3 className={style.info}>Email del usuario: {order.User.email}</h3>                
                            <h3 className={style.info}>Productos totales: {order.Products.map((e)=> {return e.Products_Orders.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h3>
                        </div>
                        {order.Products.map((products)=>{
                            return(<div className={style.divListItem}>
                                        <div>
                                        <img className={style.image} src={products.image} alt="image not found" ></img>
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
                        <h2 className={style.totalPrice}>Precio Total: ${order.amount}</h2>
                    </div>



                )})



           </div>
          )
}
                                   //<select className={style.select} onChange={e=>handleSelect(e)} name="OrderState" id={order.id}  >
                                   //     <option className={style.option} value="none" selected disabled>Cambiar estado</option>     
                                   //     <option className={style.option} value="Created">Creado</option>     
                                   //     <option className={style.option} value="processing">En proceso</option>     
                                   //     <option className={style.option} value="completed">Completado</option>     
                                   //     <option className={style.option} value="Cancelled">Cancelado</option>   
//
//
                                   //</select> 