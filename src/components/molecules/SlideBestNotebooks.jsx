import React, { useEffect, useState } from 'react';
import Card from '../atoms/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from '../../redux/actions';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'
import style from '../../styles/slidepopularproducts.module.css'
import { Link } from 'react-router-dom';

function SlideBestNotebooks() {
  const dispatch = useDispatch();
  const [category,] = useState({
    brand: "",
    categorie: ["Laptops"],
    order: "",
    praice: {
      min: 0,
      max: 0
    }
  })
  const infoBestNotebooks = useSelector(state => state.laptos);
  const productsXRating = infoBestNotebooks.sort((obj1, obj2) => {
    if (obj1.rating > obj2.rating) { return -1 }
    else if (obj1.rating < obj2.rating) { return 1 }
    else { return 0 }
  })
  const productsToSee = productsXRating.slice(0, 10)

  useEffect(() => {
    dispatch(getFilters(category))
  }, [dispatch])

  return (
    <div className={style.slideContainer}>
      <h3 className={style.title}> Las Mejores Computadoras </h3>
      <div className={style.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={80}
          slidesPerView={5}
          navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          {
            infoBestNotebooks ? productsToSee.map(({ id, image, name, price, rating }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={style.sliderbg}>
                    <Link to={`/details/${id}`}>
                      <Card
                        image={image}
                        name={name}
                        price={price}
                        id={id}
                        rating={rating}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            }) : null}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideBestNotebooks