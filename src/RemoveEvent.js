import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FaTrash, FaEdit } from "react-icons/fa";
// import EditEvent from './EditEvent';

const RemoveEvent = (props) => {
    const [modal, setModal] = useState(true);
    // const [editEvent, setEditEvent] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [data, setData] = useState(props.data.data.event.title)
    const [dataDC, setDataDC] = useState(props.data.data.event._def.extendedProps.description)


    const toggle = () => {
        setModal(!modal);
        props.method()
    }

    // console.log("props", props)
    const handleEventClick = () => {
        props.data.data.event.remove()
        props.method()
    }

    const editFunc = () => {
        // setEditEvent(true)
        // props.method()
        setDisabled(!disabled);
    }

    // console.log("Props----Description", props.data.data.event._def.extendedProps.description)

    let date = new Date(props.data.data.event.start)
    let today = date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })

    const handleDateSelect = () => {
        let calendarApi = props.data.data.view.calendar
        // console.log("CA", props.data.data)
        let currentEvent = calendarApi.getEventById(props.data.data.event.id);
        currentEvent._def.title = data
        currentEvent._def.extendedProps = { description: dataDC }
        props.data.check = false
        toggle()
    }


    return (
        <div>
            <Modal isOpen={modal} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()} style={{ fontSize: "10px" }}>
                    <div>Remove Event from the Calendar
                        <FaTrash style={{ marginRight: "10px", marginLeft: "10px" }} onClick={() => handleEventClick()} />
                        <FaEdit onClick={() => editFunc()} />
                    </div>
                </ModalHeader>
                <ModalBody>
                    <i>{today}</i>
                    <Input className='mt-2' type="text" value={data} disabled={disabled} onChange={(e) => setData(e.target.value)} />
                    <Input className='mt-2' type="text" value={dataDC} disabled={disabled} onChange={(e) => setDataDC(e.target.value)} />

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => handleDateSelect()}>Ok</Button>{' '}
                    <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
            {/* {editEvent ? <EditEvent data={editEvent} /> : null} */}
        </div>
    )
}

export default RemoveEvent
