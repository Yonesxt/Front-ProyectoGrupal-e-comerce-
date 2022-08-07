import React, { useEffect } from 'react';
import Card from '../atoms/Card';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'
import style from '../../styles/slidepopularproducts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';


function SlidePopularProducts() {

  const dispatch = useDispatch();
  const infoData = useSelector(state => state.data);
  useEffect(()=>{
      dispatch(getProducts())
  },[]) //eslint-disable-line react-hooks/exhaustive-deps

  // const productsXRating = infoData.map(ratingCant => ratingCant.rating).sort((a,b) => b-a)
  const productsToSee = infoData.slice(0,10)
  // console.log("🚀 actual", productsXRating)
  
    return (
        <div className={style.slideContainer}> 
            <h3 className={style.title}> Productos Populares</h3>
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
        infoData ? productsToSee.map(({id, image, name, price}) =>{
            return(
                      <SwiperSlide key={id}>
                      <div className={style.sliderbg}>                      
                      <Link to={`/details/${id}`}>
                          <Card 
                          image={image} 
                          name={name}
                          price={price}
                          id={id}
                          />
                      </Link>
                      </div>
                      </SwiperSlide>
                  )
              }) : null }
        
      </Swiper>
      </div>
      </div>
    )
  }

export default SlidePopularProducts


