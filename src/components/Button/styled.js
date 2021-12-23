import styled from "styled-components";
import { colors } from "../../global/styles";

export const Button = styled.button`
    background-color: ${colors.orange};
    color: ${colors.white};
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 210px;
    padding: 15px;
`;
