import React from 'react'
import DateContainer from './datecontainer'
import ListConatiner from './listconatiner'
import './todocontainer.css'
export default function TodoContainer() {
    return (
        <div className="todocontainer">
            <DateContainer/>
            <ListConatiner/>
        </div>
    )
}
