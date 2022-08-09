import React, { useEffect } from 'react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, getComments } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';


function Comments() {
  const dispatch = useDispatch();
  let commentProduct = useSelector(state => state.commentsUserXProduct)
  const idProductCurrent = useParams().id;
  const usercurrent = useSelector(state => state.userLoged)
  const idUser = usercurrent.id

  useEffect(() => {
    dispatch(getComments(idProductCurrent))
  }, [dispatch, idProductCurrent])


  function handleBtnDelete(e) {
    e.preventDefault();
    const idDel = e.target.value
    dispatch(deleteComment(idDel));
    swal({
      title: "Comentario eliminado.",
      input: "text",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    })
    dispatch(getComments(idProductCurrent))
    setTimeout(() => window.location.reload(), 1000)
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
            commentProduct.map(({ id, UserId, userInfo, text, rating }) => {
              return (
                <div key={id} className={style.allComments}>
                  <div>
                    <h3 className={style.titleUser} >{userInfo['firstname']} {userInfo['lastname']}</h3>
                    <h5>{rating} ⭐</h5>
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
}

export default Comments