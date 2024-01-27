import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { IoMdSettings } from "react-icons/io";
import "./compt1.css"





const NumberInputModal = (props) => {
    const [show, setShow] = useState(false);
    const [numberInput, setNumberInput] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        // Handle the submission logic here, e.g., update the state with the input value
        console.log(`Submitted number: ${numberInput}`);
        props.handleTimesubmit(numberInput)
        // Reset the input field and close the modal
        setNumberInput('');
        handleClose();
    };

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <IoMdSettings />
            </Button>
           
            <Modal  show={show} onHide={handleClose} style={{display:"block"}} centered>
            <section className='.modal.show .modal-dialog.model-timermodel' >  <Modal.Header closeButton>
                    <Modal.Title>Number Input</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNumberInput">
                            <Form.Label>Enter a Number:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number"
                                value={numberInput}
                                onChange={(e) => setNumberInput(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer> </section>
            </Modal>
           
        </>
    );
};

export default NumberInputModal;
