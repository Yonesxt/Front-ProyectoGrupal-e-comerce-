import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from  "../../../../redux/actions"
import { NavLink } from "react-router-dom";
import style from "./OrdersAdmin.module.css";
import { ImCross } from "react-icons/im"

function OrdersAdmin(){

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);
  
  const allOrders = useSelector((state)=> state.allOrders)


 


  return (
            <div className={style.container}>


              {allOrders && allOrders.length ? (

                <>
                  
                  
                  
                  
                  {allOrders.map((e)=>{return(
                    <div className={style.Card} key={e.id}  >
                      <div className={style.CardDate}>
                        <h3 className={style.info}>{e.date.slice(0,10)}</h3>                
                      </div>
                      <div className={style.Cardinfo}>
                        <div className={style.CardinfoUser}>                         
                        <h3 className={style.info}>{e.User.username}</h3>                
                        <h3 className={style.info}>{e.User.email}</h3>                
                        <h3 className={style.info}>{e.address}</h3>                
                        </div>
                        <div className={style.CardinfoProd}>
                        <h3 className={style.info}> $ {e.amount}</h3>               
                        <h3 className={style.info}>{e.paymentMethod}</h3>                
                        </div>
                        <div className={style.Cardinfobtn}>
                        <NavLink to={`/admin/orderdetail/${e.id}`}><button className={style.cardbtn}>Detalle</button></NavLink>            
                        </div>          
                      </div>            
                    </div>
                  )})}
                
                </>

              ):(
                <div>There was an error loading the Orders, please contact the developer</div>
              )}    

          </div>
  )
  }


export default OrdersAdmin;
//<h3 className={style.info}>{e.Products?.map((e)=> {return e.Products_Orders.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)} products</h3> 