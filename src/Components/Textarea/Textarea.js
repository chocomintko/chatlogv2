import React from "react";
import { Container } from "react-bootstrap";

function Output() {
    return (
        <Container>
            <Container>
                <textarea
                    className="form-control textarea-input"
                    rows="15"
                    id="chatlog-input"
                ></textarea>
            </Container>
            <div className="output" id="output"></div>
        </Container>
    );
}

export default Output;
