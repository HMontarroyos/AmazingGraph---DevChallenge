import React from "react";
import * as S from "./styled";
import { Carousel } from "../../components";
import {
    Analytics,
    Charts,
    Graphics,
    Segmentation,
    SetupAnalytics,
} from "../../assets";

function Features() {
    return (
        <S.Flexbox>
            <S.divText>
                <S.h1>Graphic Design </S.h1>
                <S.p>
                    Create several types of charts to catalog your application
                    data. We provide from the creation of infographics,
                    presentations, resumes, reports, interactive content, among
                    others.
                </S.p>
                <S.p>
                    We have an easy manipulation of our interface from several
                    templates available on our platform. Furthermore, we offer a
                    wide range of vectors and fonts. Thus, in a few minutes you
                    can transform written data into visual content according to
                    the your company's identity.
                </S.p>
            </S.divText>
            <S.divCarousel>
                <Carousel>
                    <S.img
                        src={Analytics}
                        alt={"Equipe Apresentando Graficos"}
                    />
                    <S.img src={Charts} alt={"Equipe Apresentando Graficos"} />
                    <S.img
                        src={Graphics}
                        alt={"Equipe Apresentando Graficos"}
                    />
                    <S.img
                        src={Segmentation}
                        alt={"Equipe Apresentando Graficos"}
                    />
                    <S.img
                        src={SetupAnalytics}
                        alt={"Equipe Apresentando Graficos"}
                    />
                </Carousel>
            </S.divCarousel>
        </S.Flexbox>
    );
}

export default Features;
