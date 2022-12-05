
import React, { useState } from 'react'
import { BsArrowBarRight } from "react-icons/bs";
import { Container, InnerContainer, IconContainer } from './styles.js';
import Answer from '../Answer'




function QuestionCard({ data, setAnswerType, setQuestionVisible }) {
    const [answerVisible, setAnswerVisible] = useState(false)

    function showAnswer() {
        setAnswerVisible(true)
    }

    return (
        <Container>
            {answerVisible === false ?
                <InnerContainer>
                    <h1>{data.question} </h1>
                    <IconContainer>
                        <BsArrowBarRight size={40} onClick={() => showAnswer()} />
                    </IconContainer>
                </InnerContainer>
                : <Answer data={data} setAnswerType={setAnswerType} setQuestionVisible={setQuestionVisible} setAnswerVisible={setAnswerVisible} />}
        </Container>

    );
}

export default QuestionCard;
