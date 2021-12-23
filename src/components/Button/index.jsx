import React from "react";
import * as S from "./styled";

function Button(props) {
    return <S.Button width={props.width}>{props.children}</S.Button>;
}

export default Button;
