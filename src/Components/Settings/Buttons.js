import { Button, Row, Col } from "react-bootstrap";

function Buttons() {
    return (
        <Row className="justify-content-md-center">
            <Col>
                <div id="buttons-chatlog-settings">
                    <Button
                        variant="light"
                        id="decrease-fontsize"
                        className="btn-space"
                    >
                        -
                    </Button>
                    <Button
                        variant="light"
                        id="reset-fontsize"
                        className="btn-space"
                    >
                        reset
                    </Button>
                    <Button
                        variant="light"
                        id="increase-fontsize"
                        className="btn-space"
                    >
                        +
                    </Button>
                </div>
            </Col>
        </Row>
    );
}

export default Buttons;
