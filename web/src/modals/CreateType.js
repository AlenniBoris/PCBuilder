import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../index";

const CreateType = ({show, onHide}) => {
    const [type, setType] = useState("");
    const {part} = useContext(Context)

    const addNewType = (type) => {
        part.addNewType(type)
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleAddClick = () => {
        addNewType(type);
        setType("");
        onHide();
    };

    return (
        <Modal
            show={show}
            onHide={onHide}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Enter new type"}
                        value={type}
                        onChange={handleChange}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={handleAddClick}>Add</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;