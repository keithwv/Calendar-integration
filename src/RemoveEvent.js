import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaTrash, FaEdit } from "react-icons/fa";

const RemoveEvent = (props) => {
    const [modal, setModal] = useState(true);
    const toggle = () => {
        setModal(!modal);
        props.method()
    }

    // console.log("props", props)
    const handleEventClick = () => {
        props.data.data.event.remove()
        props.method()
    }
    let date = new Date(props.data.data.event.start)
    let today = date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })

    return (
        <div>
            <Modal isOpen={modal} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()} style={{ fontSize: "10px" }}>
                    <div>Remove Event from the Calendar
                        <FaTrash style={{ marginRight: "10px", marginLeft: "10px" }} onClick={() => handleEventClick()} />
                        <FaEdit />
                    </div>
                </ModalHeader>
                <ModalBody>
                    <b>{props.data.data.event.title}</b><br></br>
                    <i>{today}</i>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="danger" onClick={() => handleEventClick()}>Delete</Button>{' '} */}
                    {/* <Button color="primary" onClick={() => toggle()}>Ok</Button>{' '}
                    <Button color="secondary" onClick={() => toggle()}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default RemoveEvent
