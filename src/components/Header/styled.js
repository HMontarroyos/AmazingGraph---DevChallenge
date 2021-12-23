import styled from "styled-components";
import { colors } from "../../global/styles";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const h2 = styled.h2`
    cursor: pointer;
    color: ${colors.orange};
`;

export const ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
`;

export const li = styled.li`
    color: ${colors.gray};
    font-size: 18px;
    cursor: pointer;
`;
