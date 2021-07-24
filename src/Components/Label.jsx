import React from 'react'

export default function Label({label, labelFor}) {
    return   <label labelfor={labelFor} className="form-label">{label}</label>
}