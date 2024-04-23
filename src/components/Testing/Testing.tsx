import React, {useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {Form} from "../Form/Form";
import {useQuery} from "react-query";
import {fetchQuestions} from "../../utils";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 10px 15px;
`


export const Testing = () => {
    const {data, isLoading} = useQuery('questions', fetchQuestions);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(600);
    const endOfTest = isFormComplete || timeRemaining === 0

    useEffect(() => {
        endOfTest && localStorage.clear()
        // тут зачищаем локал сторидж, но при необходимости данные должны уходить на сервер, а потом уже происходит зачистка
    }, [endOfTest])

    useEffect(() => {
        const savedTime = localStorage.getItem('timer');
        if (savedTime !== null) {
            setTimeRemaining(parseInt(savedTime, 10));
        }
    }, []);


    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;


    return (
        <Wrapper>
            {endOfTest ? (
                <h1>Тест завершен</h1>
            ) : (
                <>
                    <Header timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining}/>
                    <Form data={data} timeRemaining={timeRemaining} setIsFormComplete={setIsFormComplete}/>
                </>
            )}
        </Wrapper>
    );
};

