import { Container } from './styles.js';
import { SuccessButton, WarningButton, ErrorButton } from "./styles"
function Button({ type, children, marginHorizontal, setAnswerType, setQuestionVisible, setAnswerVisible }) {

    function actionOnClick() {
        console.log("oi")
        setQuestionVisible(false)
        setAnswerType(type)
        setAnswerVisible(false)
    }


    return (
        <Container>
            {type === "success" && <SuccessButton onClick={() => actionOnClick()}>{children}</SuccessButton>}
            {type === "warning" && <WarningButton marginHorizontal onClick={() => actionOnClick()}>{children}</WarningButton>}
            {type === "error" && <ErrorButton onClick={() => actionOnClick()}>{children}</ErrorButton>}
        </Container>
    );
}

export default Button;
