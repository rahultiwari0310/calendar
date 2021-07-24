import React, {useState} from 'react'
import dayjs from 'dayjs'
import Day from './Day'

export default function Week(props) {
    
    const {selectedWeek, addOrEditEvent, allEvents} = props

    const startOfWeek = dayjs().add(selectedWeek, 'week').startOf("week");
    
    const weekdays = new Array(7).fill(startOfWeek).map(
        (day, idx) => day.add(idx, "day")
    )

    const getEventsInDay = (day, events) => {
        return Object.keys(events)
        .filter(key => {
            return events[key].startDate >= day.$d.getTime() 
                && events[key].endDate <= day.endOf('day').$d.getTime()
        }).map(key => {
            return {...events[key], eventId: key}
        })
    }
    return <>
        <div className='row col-md-10 g-0'>
            {
                weekdays.map((it, idx) => {
                    return (
                    <Day 
                        key={it.$d.getTime()} 
                        addOrEditEvent={addOrEditEvent} 
                        date={it} 
                        isFirstDay={!idx}
                        eventsInDay={getEventsInDay(it, allEvents)||[]}
                    />)
                })
            }
        </div>
        
    </>

}