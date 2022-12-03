import { Container } from './styles.js';
import { SuccessButton, WarningButton, ErrorButton } from "./styles"
function Button({ type, children, marginLeft }) {
    return (
        <Container>
            {type === "success" && <SuccessButton marginLeft>{children}</SuccessButton>}
            {type === "error" && <ErrorButton marginLeft>{children}</ErrorButton>}
            {type === "warning" && <WarningButton marginLeft>{children}</WarningButton>}
        </Container>
    );
}

export default Button;
