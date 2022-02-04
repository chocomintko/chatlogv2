import { Container, Row } from "react-bootstrap";
import logo from "../../logo.png";
import "./Header.css";

function Header() {
    return (
        <Container id="header-container">
            <Row>
                <img src={logo} />
            </Row>
        </Container>
    );
}

export default Header;
