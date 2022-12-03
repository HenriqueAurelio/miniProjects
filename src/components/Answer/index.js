
import React from 'react'
import { InnerContainer, ButtonContainer } from './styles.js';
import Button from '../Button'



function Answer({ data }) {
    return (
        <InnerContainer>
            <h1>{data.question}</h1>
            <h1>{data.answer} </h1>
            <ButtonContainer>
                <Button type={"error"} >
                    Não lembrei
                </Button>
                <Button type={"warning"} marginLeft>
                    Quase não lembrei
                </Button>
                <Button type={"success"} marginLeft>
                    Acertei!
                </Button>
            </ButtonContainer>
        </InnerContainer>
    );
}



export default Answer;
