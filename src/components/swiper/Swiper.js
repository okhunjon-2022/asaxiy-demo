import React, { useState, useEffect } from 'react';
import "./Swiper.css";
import "./SwiperMedia.css"
import axios from "../../api/"

// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";





function Swiper1() {
    const [data, setData] = useState([])
    // console.log(data);

    useEffect(() => {
        axios.get("/swiper").then(res => {
            // console.log(res)
            setData(res.data.innnerData)
        })
            .catch(err => console.log(err))
    }, [])
    // console.log(data);



    return (
        <div className='swiper1 container'>
            <Swiper className="mySwiper"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
                <>
                {
                        data?.map(value => (
                            <SwiperSlide className='swiper__slide' key={value._id}>
                                <img className='swiper__img' src={value?.url}  alt=""  />
                            </SwiperSlide>
                        ))

                    }
                </>
                
            </Swiper>

           














            {/* <div className="swiper__wrapper">
                
                   

                    

            </div>
            
             */}




        </div>




    )
}

export default Swiper1