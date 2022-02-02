import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from "yup";

const EditEvent = (props) => {
    const [modal, setModal] = useState(true);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(15, "Only 15 characters or less")
                .required("Required"),
            description: Yup.string()
                .min(15, "More than 15 characters"),
        })
    })
    // console.log("Formik values", formik.values.description)

    const toggle = () => {
        setModal(!modal);
        // props.method()

    }

    // let eventGuid = 0
    // const createEventId = () => {
    //     return String(eventGuid++)
    // }
    // const handleDateSelect = () => {
    //     // console.log("Props---------->", props.data.data.view.calendar)
    //     let calendarApi = props.data.data.view.calendar
    //     calendarApi.unselect()
    //     let title = formik.values.title
    //     let description = formik.values.description
    //     if (title) {
    //         calendarApi.addEvent({
    //             id: createEventId(),
    //             title,
    //             description,
    //             start: props.data.data.startStr,
    //             end: props.data.data.endStr,
    //             allDay: props.data.data.allDay
    //         })
    //     }
    //     props.data.check = false

    //     setModal(!modal);
    // }
    return (
        <div>
            <Modal isOpen={modal} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()}>Edit Title and Description for your Event</ModalHeader>
                <ModalBody>
                    <Input type="text" name="title" id="title" value={formik.values.title} onChange={formik.handleChange} placeholder='Add title' /><br></br>
                    {formik.errors.title ? <p>{formik.errors.title}</p> : null}
                    <Input type="text" name="description" id="description" value={formik.values.description} onChange={formik.handleChange} placeholder='Description' />
                    {formik.errors.description ? <p>{formik.errors.description}</p> : null}
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" onClick={() => handleDateSelect()}>Ok</Button>{' '} */}
                    <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditEvent
