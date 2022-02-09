import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./color.css";
import $ from "jquery";

export default function Output() {
    const [chatlog, setChatlog] = useState("");

    const handleChange = (event) => {
        setChatlog(event.target.value);
    };

    $(function () {});

    return (
        <Container>
            <Container>
                <textarea
                    className="form-control textarea-input"
                    rows="15"
                    value={chatlog}
                    onChange={handleChange}
                ></textarea>
            </Container>
            <div className="output" id="output">
                <span>{chatlog}</span>
            </div>
        </Container>
    );
}
