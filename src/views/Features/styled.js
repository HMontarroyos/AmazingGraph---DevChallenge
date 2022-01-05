import styled from "styled-components";
import { colors } from "../../global/styles";

export const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const divText = styled.div`
    height: 250px;
    width: 350px;
`;

export const h1 = styled.h1`
    display: inline;
    width: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        to right,
        ${colors.gray} 50%,
        ${colors.orange} 50%
    );
    font-size: 45px;
    letter-spacing: 1px;
`;

export const p = styled.p`
    color: ${colors.gray};
    font-size: 20px;
    margin-bottom: 40px;
`;

export const divCarousel = styled.div`
    width: 450px;
`;

export const img = styled.img`
    width: 450px;
    height: 250px;
`;
