import React, { useEffect, useState } from "react";
import FavCard from "../molecules/favcard.jsx";
import style from "../../styles/favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFavorite } from "../../redux/actions";

export default function FavoriteMap() {
  const dispatch = useDispatch();
  const userL = useSelector((state) => state.userLoged);
  const UserFavorite = useSelector((state) => state.UserFavs);
  const [itemToDelete, setItemToDelete] = useState("");
  const numberOfFavorites =
    UserFavorite.length && UserFavorite[0].Products?.length;

  useEffect(() => {
    Object.keys(userL).length > 0 && dispatch(getUsersFavorite(userL.id));
  }, [itemToDelete]);
  console.log("🚀 ~ file: FavoriteMap.jsx ~ line 18 ~ FavoriteMap ~ itemToDelete", itemToDelete)

  const mapFavorites = UserFavorite[0]?.Products || [];
  if (!numberOfFavorites) return <p>Favoritos Vacio</p>;
  return (
    <div className={style.cardgrid}>
      {mapFavorites.map(({ image, name, id, price }) => (
        <FavCard
          setItemToDelete={setItemToDelete}
          img={image}
          name={name}
          id={id}
          price={price}
        />
      ))}
    </div>
  );
}
