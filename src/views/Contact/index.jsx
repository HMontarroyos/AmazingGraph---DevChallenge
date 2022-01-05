import React from "react";
import * as S from "./styled";
import { Contacts } from "../../assets";

function Contact() {
    return (
        <S.Flexbox>
            <S.div>
                <S.h1>Contact Us</S.h1>
                <S.p>
                    Contact us to make your quote. Fill in the form below with
                    your details, and we will be contacting you soon.
                </S.p>
                <S.form method="post">
                    <S.input placeholder="E-mail" type="email" required />
                    <S.textarea placeholder="Sua mensagem..."></S.textarea>
                </S.form>
                <S.inputButton type="submit" value="Send"></S.inputButton>
            </S.div>
            <S.img src={Contacts} alt={"Contatos"} />
        </S.Flexbox>
    );
}

export default Contact;
