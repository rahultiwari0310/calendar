import React from 'react'

export default function NavOption({ onClick, icon }) {
    return <button onClick={onClick} type="button" className="calendar-nav-button col-md-1 btn btn-primary "><i className={`fas fa-angle-${icon}`}></i></button>
}