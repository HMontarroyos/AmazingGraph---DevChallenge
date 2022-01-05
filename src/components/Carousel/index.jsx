import React from "react";
import * as S from "./styled";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel(props) {
    SwiperCore.use([Pagination]);
    return (
        <>
            <Swiper pagination={true} className="mySwiper">
                {React.Children.map(props.children, (child) => (
                    <SwiperSlide>{child}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel;
