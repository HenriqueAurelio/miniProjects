
import React, { useState } from 'react'
import { BsCaretRight } from "react-icons/bs";
import { Container, InnerContainer } from './styles.js';
import Question from '../Question'




function QuestionCard({ questionNumber, data }) {
    const [questionVisible, setQuestionVisible] = useState(false)

    function showQuestion() {
        setQuestionVisible(true)
    }

    return (
        <Container>
            {questionVisible === false ?
                <InnerContainer>
                    <h1>Pergunta {questionNumber} </h1>
                    <BsCaretRight size={40} onClick={() => showQuestion()} />
                </InnerContainer>
                :
                <Question data={data} />
            }

        </Container>

    );
}



export default QuestionCard;
