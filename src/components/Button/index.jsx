import React from "react";
import * as S from "./styled";

function Button(props) {
    return (
        <S.Button width={props.width} margin={props.margin || 0}>
            {props.children}
        </S.Button>
    );
}

export default Button;
