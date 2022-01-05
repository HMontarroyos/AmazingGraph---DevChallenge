import React from "react";
import * as S from "./styled";

function Header() {
    return (
        <S.Header>
            <S.LinkRedirect to={"/"}>
                <S.h2>DevChallenge</S.h2>
            </S.LinkRedirect>
            <nav>
                <S.ul>
                    <S.LinkRedirect to={"/"}>
                        <S.li>Home</S.li>
                    </S.LinkRedirect>
                    <S.LinkRedirect to={"/features"}>
                        <S.li>Features</S.li>
                    </S.LinkRedirect>
                    <S.LinkRedirect to={"/contact"}>
                        <S.li>Contact</S.li>
                    </S.LinkRedirect>
                </S.ul>
            </nav>
        </S.Header>
    );
}

export default Header;
