import React from 'react'
const ShowEvent = ({ event, id }) => {
    let date = new Date(event.start)
    let today = date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
    // console.log("description", event._def.extendedProps.description)
    return (
        <div>
            <li key={id}>
                <h6>{today}</h6>
                <b>{event._def.title}</b>
                <i>{event._def.extendedProps.description}</i>
            </li>
        </div>
    )
}

export default ShowEvent
