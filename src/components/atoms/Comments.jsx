import React, { useEffect, useState } from 'react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {deleteComment, getComments } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import trash from "../../assets/trash2.png";


function Comments() {
  const dispatch = useDispatch();
  let commentProduct = useSelector(state => state.commentsUserXProduct)  
  const idProductCurrent = useParams().id;
  const usercurrent = useSelector(state => state.userLoged)
  const idUser = usercurrent.id 

  useEffect(() => {
    dispatch(getComments(idProductCurrent))
  }, [idProductCurrent])


  function handleBtnDelete(e) {
    e.preventDefault(e);
    const idDel = e.target.value
    dispatch(deleteComment(idDel));
    swal({
      title: "Comentario eliminado.",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      buttons: {
        cancel: 'ok'
      }
    })
    dispatch(getComments(idProductCurrent))
  }

  return (
    <div className={style.div}>
      <div>
        {Array.isArray(commentProduct) ? (commentProduct.length === 1
          ? <h2> {commentProduct.length} Comentario</h2>
          : <h2> {commentProduct.length} Comentarios</h2>)
          : ''
        }
        {
          Array.isArray(commentProduct) ?
            commentProduct.map(({ id, UserId, userInfo, text }) => {              
              return (
                <div key={id} className={style.allComments}>
                  <div>
                    <h3 className={style.titleUser} >{userInfo['firstname']} {userInfo['lastname']}</h3> 
                    <p className={style.text}>{text}</p>
                  </div>
                  {
                    UserId === idUser
                    ?
                      <button className={style.btnDelete} value={id} onClick={e => handleBtnDelete(e)}>Borrar</button>
                      :
                      ''                    
                  }
                </div>
              )
            })
            : <p>'Sin Comentarios'</p>
        }
      </div>
    </div>
  )
  // <img src={trash} className={style.trash1} />
}

export default Comments