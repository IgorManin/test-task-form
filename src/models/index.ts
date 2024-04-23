import React, {Dispatch, MutableRefObject, SetStateAction} from "react";
import {FormikHelpers, FormikValues} from "formik";

export interface Question {
    question: string;
    options: string[];
    type: "single" | "multi" | "short" | "long";
}

export interface Answer {
    question: string;
    answer: string;
}


export interface AnswerData {
    data: Answer[];
}

export interface FormData {
    data: Question[];
    timeRemaining: number
    setIsFormComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProgressIndicatorData {
    totalQuestions: number;
    currentQuestionIndex: number
}


export interface SubmitParams {
    values: FormikValues;
    resetForm: FormikHelpers<FormikValues>['resetForm'];
    data: Question[];
    currentQuestionIndex: number;
    setIsFormComplete: Dispatch<SetStateAction<boolean>>;
    cachedAnswersRef: MutableRefObject<AnswerData[]>;
    setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
}

export interface HeaderProps {
    timeRemaining: number;
    setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
}