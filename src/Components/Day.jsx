import dayjs from 'dayjs'
import React from 'react'
import ReactTooltip from 'react-tooltip';

export default function Day(props) {
    const { date, isFirstDay, addOrEditEvent, eventsInDay } = props
    return <div className='col border'>
        <div className='day-heading'>{date.format('DD MMM YYYY')}</div>
        <div className='day-heading'>{date.format('dddd')}</div>
        <div className='half-hours'>
            {
                new Array(48).fill(1).map((it, idx) => {
                    const slot = date.startOf('day').add(idx * 30, 'minutes')
                    return <div className='half-hour' key={slot.$d.getTime()
                    } onClick={e => addOrEditEvent({ slot })}>{
                            isFirstDay && !(idx % 2) ? <span className='half-hour-time'>{
                                slot.format('hh:mm A')
                            }</span> : null}</div>
                })
            }
            {
                eventsInDay.map(it => {
                    return <div 
                                key={it.eventId}
                                className='event-in-day' 
                                style={{
                                    height: ((it.endDate - it.startDate)/(1000*60*30))*20 + 'px',
                                    top: ((it.startDate - date.startOf('day').$d.getTime())/(1000*60*30))*20 + 'px'
                                }}
                                data-for={it.eventId}
                                data-tip
                                onClick={e => addOrEditEvent({ ...it })}
                        >
                            <div className='event-title'>{it.title}</div>
                            <div className='event-time'>{dayjs(it.startDate).format('hh:mm')} - {dayjs(it.endDate).format('hh:mm A')}</div>
                            <ReactTooltip id={it.key} effect='solid' clickable offset={{top: 0, left: 0}}>
                                <p>Title: {it.title}</p>
                                <p>Owner: {it.owner}</p>
                                <p>Time: {dayjs(it.startDate).format('DD MMM YYYY hh:mm A')} - {dayjs(it.endDate).format('DD MMM YYYY hh:mm A')}</p>
                                {it.theme ? <p>Theme: {it.theme}</p> : null}
                            </ReactTooltip>
                        </div>
                })
            }
        </div>

    </div>
}