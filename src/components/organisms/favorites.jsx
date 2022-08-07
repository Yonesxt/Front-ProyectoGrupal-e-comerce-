import React from "react";
import FavCard from '../molecules/favcard.jsx';
import style from '../../styles/favorites.module.css';

export default function Favorites() {
    
    const Object = {
        img: "https://www.nicepng.com/png/detail/145-1451818_drawing-adventure-bmo-adventure-time-bmo-drawing.png",
        name:"BMO Original",
        price:"999",
    }



    return (
        <div className={style.container}>
            <div className={style.wrapper}>

                <h1 className={style.title}>Favoritos</h1>

                {/*hardcoded        */}


                <div className={style.cardgrid}>
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                    <FavCard img={Object.img} name={Object.name} price={Object.price} />
                </div>
                





            </div>
        </div>
    )
}