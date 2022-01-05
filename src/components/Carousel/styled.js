import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../global/styles";

export const swiperSlide = styled(SwiperSlide)`
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
`;

export const swiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`;
