import React from "react";
import * as S from "./styled";
import Image from "../../assets/team.jpg";
import { Button } from "../../components";

function Home() {
    return (
        <S.Flexbox>
            <S.div>
                <S.h1>Create amazing graphics </S.h1>
                <S.p>
                    Colaborate and create beautiful graphics with yout team
                </S.p>
                <Button width={"210px"}>Start now </Button>
            </S.div>
            <S.img src={Image} alt={"Equipe Apresentando Graficos"} />
        </S.Flexbox>
    );
}

export default Home;
