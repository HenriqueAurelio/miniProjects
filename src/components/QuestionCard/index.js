
import React, { useState } from 'react'
import { BsCaretRight } from "react-icons/bs";
import { Container, InnerContainer, CustomH1 } from './styles.js';
import Question from '../Question'




function QuestionCard({ questionNumber, data }) {
    const [questionVisible, setQuestionVisible] = useState(false)
    const [answerType, setAnswerType] = useState('')

    function showQuestion() {
        setQuestionVisible(true)
    }

    return (
        <Container>
            {questionVisible === false ?
                <InnerContainer>
                    <CustomH1 type={answerType}>Pergunta {questionNumber} </CustomH1>
                    <BsCaretRight size={40} onClick={() => showQuestion()} />
                </InnerContainer>
                :
                <Question data={data} setAnswerType={setAnswerType} setQuestionVisible={setQuestionVisible} />
            }

        </Container>

    );
}



export default QuestionCard;
