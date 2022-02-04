import "./App.css";
import { Container } from "react-bootstrap";
import Textarea from "../Textarea/Textarea";
import Buttons from "../Settings/Buttons";

function App() {
    return (
        <div className="App">
            <div className="size-buttons">
                <Container id="chatlog-settings-container">
                    <Buttons />
                </Container>
            </div>
            <Textarea />
        </div>
    );
}

export default App;
