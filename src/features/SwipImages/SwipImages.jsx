import React, {useRef, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { TMDBServices } from '../../commons/services/TMDB_API';
import getRandomMovie from '../Banner/getRandomMovie';

const SwipImages = () => {

  const [movie, setMovie] = useState({})

  const getMovie = async () => {
    const {backdropLow} =  await getRandomMovie()
    setMovie({backdropLow})
  }


  useEffect(() => {
    getMovie()
    const timer = setInterval(() =>{
      getMovie()
    }, 7000)
    return () => clearInterval(timer);
  
  },[])

  const BASE_URL = "https://image.tmdb.org/t/p/w500"


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'><img src={movie.backdropLow}></img></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwipImages