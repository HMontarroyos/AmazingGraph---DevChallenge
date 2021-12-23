import React from "react";
import * as S from "./styled";

function Header() {
    return (
        <S.Header>
            <S.h2>DevChallenge</S.h2>
            <nav>
                <S.ul>
                    <S.li>Home</S.li>
                    <S.li>Features</S.li>
                    <S.li>Contact</S.li>
                </S.ul>
            </nav>
        </S.Header>
    );
}

export default Header;
