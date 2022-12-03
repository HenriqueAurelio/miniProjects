import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Container } from './styles.js';
function Header() {
    return (
        <Container>
            <BsFillJournalBookmarkFill size={40} />
            <h1>Studying Hard</h1>
        </Container>
    );
}

export default Header;
