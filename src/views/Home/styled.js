import styled from "styled-components";
import { colors } from "../../global/styles";

export const Flexbox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const div = styled.div`
    height: 250px;
    width: 350px;
    z-index: 9999;
    padding-right: 500px;
`;

export const h1 = styled.h1`
    color: ${colors.gray};
    font-size: 45px;
    letter-spacing: 1px;
`;

export const p = styled.p`
    color: ${colors.gray};
    font-size: 20px;
    margin-bottom: 40px;
`;

export const img = styled.img`
    width: 550px;
    height: 320px;
    position: absolute;
    margin-top: 150px;
    margin-left: 210px;
`;
