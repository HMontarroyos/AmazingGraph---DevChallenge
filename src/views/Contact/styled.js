import styled from "styled-components";
import { colors } from "../../global/styles";

export const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const div = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
`;
export const h1 = styled.h1`
    display: inline;
    width: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        to right,
        ${colors.gray} 50%,
        ${colors.orange} 10%
    );
    font-size: 45px;
    letter-spacing: 1px;
    margin: 10px;
`;

export const p = styled.p`
    color: ${colors.gray};
    font-size: 20px;
    margin: 10px;
`;

export const form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const input = styled.input`
    margin: 10px;
    padding: 10px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: ${colors.orangeLight};
    font-family: "Roboto", sans-serif;
    font-size: 18px;

    &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &::-moz-placeholder {
        /* Firefox 19+ */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &:-ms-input-placeholder {
        /* IE 10+ */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &:-moz-placeholder {
        /* Firefox 18- */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
`;

export const textarea = styled.textarea`
    height: 200px;
    border-radius: 5px;
    border: none;
    background-color: ${colors.orangeLight};
    margin: 10px;
    padding: 10px;
    resize: none;
    font-family: "Roboto", sans-serif;
    font-size: 18px;

    &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &::-moz-placeholder {
        /* Firefox 19+ */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &:-ms-input-placeholder {
        /* IE 10+ */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
    &:-moz-placeholder {
        /* Firefox 18- */
        font-family: "Roboto", sans-serif;
        font-size: 18px;
    }
`;

export const inputButton = styled.input`
    background-color: ${colors.orange};
    color: ${colors.white};
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    height: 50px;
    transition: all 0.1s;

    &:hover {
        background-color: ${colors.orangeDark};
    }
`;

export const img = styled.img`
    width: 450px;
    height: 250px;
`;
