import {ErrorMessage as Error, Field} from "formik";
import {Question} from "../../models";
import React from 'react';
import styled from "@emotion/styled";

const FieldWrapper = styled.div`
  margin: 5px 0;

  :first-of-type {
    margin-top: 20px;
  }
`


export const renderInputField = (questionType: string, data: Question) => {
    switch (questionType) {
        case 'single':
            return data.options.map((option: string, index: number) => (
                <FieldWrapper key={index}>
                    <Field type="radio" id={`option${index}`} name="selectedOption" value={option}/>
                    <label htmlFor={`option${index}`}>{option}</label>
                </FieldWrapper>
            ));
        case 'multi':
            return data.options.map((option: string, index: number) => (
                <FieldWrapper key={index}>
                    <Field type="checkbox" id={`option${index}`} name={`selectedOptions[${index}]`} value={option}/>
                    <label htmlFor={`option${index}`}>{option}</label>
                </FieldWrapper>
            ));
        case 'short':
            return (
                <FieldWrapper>
                    <Field type="text" id="shortAnswer" name="shortAnswer" maxLength={10}/>
                    <Error name="shortAnswer" component="div"/>
                </FieldWrapper>
            );
        case 'long':
            return (
                <FieldWrapper>
                    <Field as="textarea" id="longAnswer" name="longAnswer" maxLength={300}/>
                    <Error name="longAnswer" component="div"/>
                </FieldWrapper>
            ); // есть возможность добавить другие типы вопросов
        default:
            return null;
    }
}
