import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllReviews, deleteComment } from "../../../../redux/actions"
import style from "./ReviewsAdmin.module.css";
import { ImCross } from "react-icons/im"
import swal from 'sweetalert'

function ReviewsAdmin() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllReviews());
  }, []);

  const allreviews = useSelector((state) => state.allComments)

  function deleteHandler(e) {
    console.log(e.id)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you can`t recover the review!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteComment(e.id))
          swal("the review has been deleted!", {
            icon: "success",
          });
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        } else {
          swal("Your review is safe!");
        }
      });
  }

  return (
    <div className={style.container}>
      {allreviews && allreviews.length ? (
        <>
          <div className={style.CardTop}>
            <h2>Id</h2>
            <h2>email</h2>
            <h2>Rating</h2>
            <h2>texto</h2>
          </div>
          {allreviews.map((e) => {
            return (
              <div className={style.Card} key={e.id}>
                <button className={style.DelBtn} id={e.id} onClick={() => deleteHandler(e)}>
                  < ImCross
                    className={style.DelBtnr} />
                </button>
                <h3 className={style.info}>{e.id}</h3>
                <h3 className={style.info}>{e.User.email}</h3>
                <h3 className={style.info}>{e.rating}</h3>
                <h3 className={style.info}>{e.text}</h3>
              </div>
            )
          })}
        </>
      ) : (
        <div>There was an error loading the reviews, please contact the developer</div>
      )}
    </div>
  )
}

export default ReviewsAdmin;