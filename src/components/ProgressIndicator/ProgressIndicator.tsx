import React from 'react';
import {ProgressIndicatorData} from "../../models";
import styled from "@emotion/styled";

const ProgressIndicatorWrapper = styled.div<{ status: 'completed' | 'active' | 'remaining' }>`
  background-color: ${props => {
    if (props.status === 'completed') return 'black';
    if (props.status === 'active') return 'red';
    return 'gray';
  }};
  margin: 0 5px 10px 0;
  display: inline-block;
  height: 10px;
  width: 45px;
`

export const ProgressIndicator = ({totalQuestions, currentQuestionIndex}: ProgressIndicatorData) => {
    const indicators = Array.from({length: totalQuestions}, (_, index) => {
        let status: 'completed' | 'active' | 'remaining' = 'remaining';
        if (index < currentQuestionIndex) {
            status = 'completed';
        } else if (index === currentQuestionIndex) {
            status = 'active';
        }
        return (
            <ProgressIndicatorWrapper
                key={index}
                status={status}
            />
        );
    });

    return <div>{indicators}</div>;
};


