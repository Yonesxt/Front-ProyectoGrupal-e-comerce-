import React, { useEffect } from "react";
import FavCard from "../molecules/favcard.jsx";
import style from "../../styles/favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFavorite } from "../../redux/actions";

export default function Favorites() {
  const dispatch = useDispatch();

  const userL = useSelector((state) => state.userLoged);
  useEffect(() => {
    if (userL) {
      Object.keys(userL).length > 0 && dispatch(getUsersFavorite(userL.id));
    }
  }, [Object.keys(userL).length]);

  const UserFavorite = useSelector((state) => state.UserFavs);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Favoritos</h1>

        <div className={style.cardgrid}>
          {UserFavorite[0] ? (
            UserFavorite[0].Products.map((fav) => {
              return (
                <FavCard
                  img={fav.image}
                  name={fav.name}
                  id={fav.id}
                  price={fav.price}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
