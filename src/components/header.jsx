import React from "react";
import MenuBar from "./menuBar";
import styled from "styled-components";
import call from "../assets/icons/phone-call.png";
import mail from "../assets/icons/mail-send.png";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
    margin: 0;
    padding: 0;
    height: auto;
`;

const HeaderBar = styled.div`
    background-color: #b89b5f;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;

    aside {
        position: relative;
        height: auto;
        padding: 0;
        margin: 0;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;

const BarDefault = styled.div`
    width: 65vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ButtonConsultation = styled.button`
    background-color: rgba(170, 164, 154, 0.363);
    position: relative;
    width: 200px;
    height: 100%;
    padding: 12px 5px;
    color: white;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    cursor: pointer;
    border: none;
`;

const Title = styled.h1`
    color: #b89b5f;
    font-size: 1.8rem;
    margin: 0;
    justify-items: center;
    align-items: center;
    text-align: center;
    position: relative;
`;

const Boxcontainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 15vh;
    padding-bottom: 30px;
`;

const BoxHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 65vw;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    h2 {
        color: #b89b5f;
        margin: 0;
        padding: 0;
    }

    p {
        color: #c8c8c8;
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
    }

    img {
        width: 20px;
        height: 20px;
        border: 1px solid #b89b5f;
        border-radius: 50%;
        padding: 10px;
        color: #b89b5f;
    }
`;

const BarContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10rem;
`;

export default function Header(props) {
    return (
        <HeaderContainer>
            <HeaderBar>
                <BarDefault>
                    <aside>
                        <p>Bravery, courage, fear and love in a time of war</p>
                    </aside>
                    <NavLink to="/PageNotFound">
                        <ButtonConsultation>
                            Free Consultation
                        </ButtonConsultation>
                    </NavLink>
                </BarDefault>
            </HeaderBar>
            <Boxcontainer>
                <BoxHeader>
                    <Title>Denzel & Michael </Title>
                    <BarContact>
                        <Contact>
                            <div>
                                <img src={call} alt="" />
                            </div>
                            <div>
                                <span>
                                    <h2>Call us</h2>
                                </span>
                                <p>+ 55 32 3215-4841</p>
                            </div>
                        </Contact>
                        <Contact>
                            <div>
                                <img src={mail} alt="" />
                            </div>
                            <div>
                                <span>
                                    <h2>Email us</h2>
                                </span>
                                <p>info@denzelmichael.adv</p>
                            </div>
                        </Contact>
                    </BarContact>
                </BoxHeader>
            </Boxcontainer>
            <MenuBar />
        </HeaderContainer>
    );
}
