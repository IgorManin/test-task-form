import React, {useEffect, useRef, useState} from 'react';
import {Form as FormikForm, Formik} from 'formik';
import {AnswerData, FormData} from '../../models';
import {renderInputField} from "./renderInputField";
import {ProgressIndicator} from "../ProgressIndicator/ProgressIndicator";
import styled from "@emotion/styled";
import {handleSubmit} from "../../utils";


const Button = styled.button`
  background-color: #c90000;
  color: white;
  font-size: 17px;
  font-family: Ubuntu sans-serif;
  padding: 5px 25px;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 3px;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;`


export const Form = ({data, setIsFormComplete}: FormData) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const cachedAnswersRef = useRef<AnswerData[]>([]);


    useEffect(() => {
        cachedAnswersRef.current = JSON.parse(localStorage.getItem('answers') || '[]');
        setCurrentQuestionIndex(Number(localStorage.getItem('currentQuestionIndex')) || 0);
    }, []);
    
    return (
        <>
            <ProgressIndicator totalQuestions={data.length} currentQuestionIndex={currentQuestionIndex}/>
            <Formik initialValues={{}} onSubmit={(values, {resetForm}) => {
                handleSubmit(
                    {
                        values,
                        resetForm,
                        data,
                        currentQuestionIndex,
                        setIsFormComplete,
                        cachedAnswersRef,
                        setCurrentQuestionIndex
                    }
                );
            }}>
                {() => (
                    <FormikForm>
                        <Label htmlFor="question">{data[currentQuestionIndex].question}</Label>
                        {renderInputField(data[currentQuestionIndex].type, data[currentQuestionIndex])}
                        <Button type="submit">Отправить</Button>
                    </FormikForm>
                )}
            </Formik>
        </>

    );
};
