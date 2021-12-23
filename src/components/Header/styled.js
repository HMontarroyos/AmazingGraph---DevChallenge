import styled from "styled-components";
import { Link } from "react-router-dom";
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
    transition: all 0.1s;

    &:hover {
        color: ${colors.orangeDark};
    }
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
    transition: all 0.1s;

    &:hover {
        color: ${colors.grayDark};
    }
`;

export const LinkRedirect = styled(Link)`
    text-decoration: none;
`;
