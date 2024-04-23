import React, {useEffect} from 'react';
import {formatTime} from "../../utils";
import styled from "@emotion/styled";
import {HeaderProps} from "../../models";


const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
const Timer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;
  border: 1px solid black;
  border-radius: 2px;
  margin-left: 10px;
  height: 30px;
`

const Tittle = styled.h1`
  margin: 0;
`


export const Header = ({timeRemaining, setTimeRemaining}: HeaderProps) => {

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem('timer', timeRemaining.toString());
    }, [timeRemaining]);

    const formattedTime = formatTime(timeRemaining);


    return (
        <HeaderStyled>
            <Tittle>Тестирование</Tittle>
            <Timer>{formattedTime}</Timer>
        </HeaderStyled>
    );
};

