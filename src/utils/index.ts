import {questions} from "../data";
import {SubmitParams} from "../models";


export const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};


export const fetchQuestions = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // эмитация загрузки данных
        return questions;
    } catch (error) {
        throw new Error((error as Error).message || 'An error occurred while fetching questions');
    }
};


export const handleSubmit = (
    {
        values,
        resetForm,
        data,
        currentQuestionIndex,
        setIsFormComplete,
        cachedAnswersRef,
        setCurrentQuestionIndex
    }: SubmitParams
) => {
    const newAnswer = {question: data[currentQuestionIndex].question, answer: values.selectedOption};
    const newAnswers = [...cachedAnswersRef.current, newAnswer];

    localStorage.setItem('answers', JSON.stringify(newAnswers));
    localStorage.setItem('currentQuestionIndex', String(currentQuestionIndex + 1));

    if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        resetForm();
    } else {
        localStorage.removeItem('answers');
        localStorage.removeItem('currentQuestionIndex');
        setIsFormComplete(true);
    }
};

