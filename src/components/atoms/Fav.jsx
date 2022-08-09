import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react";
import { favoritePost, deleteFavorite } from '../../redux/actions'
import style from '../../styles/Fav.module.css'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'; 
const Fav = (props) => {
    const userLoged = useSelector((state) => state.userLoged)
    let [fav, setFav] = useState(false)
    let [estado, setEstado] = useState({
        idProducts:"",
        idUser:userLoged
    })
    let {user, loginWithRedirect,} = useAuth0()
    const dispatch = useDispatch()


    function handleClickPost (e) {
        e.preventDefault();
        dispatch(favoritePost(props.id, userLoged.id))   
        setFav(true)
        swal("producto añadido a favoritos")
    }

    function handleClickDelete (e) {
        e.preventDefault();     
        dispatch(deleteFavorite(props.id, userLoged.id))   
        setFav(false)
        swal("producto removido de favoritos")
    }
    


       //function HandleFavorite(e){
   //    console.log(e.target.id, user)
   //    dispatch(favoritePost(e.id, user.id))
   //}

  return (
    <div>
        {user? !fav? <button className={style.favButton} id={props.id} onClick={(e)=>handleClickPost(e)}>
                     <AiOutlineHeart
                     className={style.favicon}/>
               </button> :
               <button className={style.favButton} id={props.id} onClick={(e)=>handleClickDelete(e)}>
                      <AiFillHeart
                      className={style.favicon}/>
           </button> :<></> }   
    </div>
  )
}

export default Fav