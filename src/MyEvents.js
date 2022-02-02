import React, { useState } from 'react'
import AddEvent from './AddEvent';
import FSBFullCalendar from './FSBFullCalendar';
import ShowEvent from './FSBFullCalendar/ShowEvent';
import RemoveEvent from './RemoveEvent.js';

const MyEvents = () => {
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([])
    const [openmodel, setOpenModel] = useState({
        check: false,
        data: ""
    });
    const [removeEvents, setRemoveEvents] = useState({
        check: false,
        data: ""
    })

    const method = () => {
        setOpenModel({ check: false })
        setRemoveEvents({ check: false, data: "" })
    }

    const handleWeekendsToggle = () => {
        setWeekendsVisible(!weekendsVisible)
    }

    const handleDateSelect = (selectInfo) => {
        setOpenModel({
            check: true,
            data: selectInfo
        })
    }

    const handleEventClick = (clickInfo) => {
        setRemoveEvents({
            check: true,
            data: clickInfo
        })

    }


    const handleEvents = (events) => {
        setCurrentEvents(events)
    }

    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
                <FSBFullCalendar
                    weekends={weekendsVisible}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    eventsSet={handleEvents}
                />
            </div>
            <div className='demo-app-sidebar'>
                <div className='demo-app-sidebar-section'>
                    <h4>All Events ({currentEvents.length})</h4>
                    <ul>
                        {currentEvents.map(
                            (item, id) => <>
                                <ShowEvent event={item}
                                    id={id} />
                            </>
                        )}
                    </ul>
                </div>
                <div className='demo-app-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            checked={weekendsVisible}
                            onChange={handleWeekendsToggle}
                        ></input>
                        Weekends
                    </label>
                </div>
            </div>
            {openmodel.check ? <AddEvent data={openmodel} method={method} /> : null}
            {removeEvents.check ? <RemoveEvent data={removeEvents} method={method} /> : null}
        </div>

    )
}

export default MyEvents
