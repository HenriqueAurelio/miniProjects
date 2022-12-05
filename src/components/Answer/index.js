
import React from 'react'
import { InnerContainer, ButtonContainer } from './styles.js';
import Button from '../Button'



function Answer({ data, setAnswerType, setQuestionVisible, setAnswerVisible }) {
    return (
        <InnerContainer>
            <h1>{data.question}</h1>
            <h1>{data.answer} </h1>
            <ButtonContainer>
                <Button type={"error"} setAnswerType={setAnswerType} setQuestionVisible={setQuestionVisible} setAnswerVisible={setAnswerVisible} >
                    Não lembrei
                </Button>
                <Button type={"warning"} setAnswerType={setAnswerType} marginHorizontal setQuestionVisible={setQuestionVisible} setAnswerVisible={setAnswerVisible}>
                    Quase não lembrei
                </Button>
                <Button type={"success"} setAnswerType={setAnswerType} setQuestionVisible={setQuestionVisible} setAnswerVisible={setAnswerVisible}>
                    Acertei!
                </Button>
            </ButtonContainer>
        </InnerContainer>
    );
}



export default Answer;
