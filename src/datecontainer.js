import React from 'react'
import './datecontainer.css'
export default function DateContainer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();

    const monthNumber = currentDate.getMonth(); // Returns a number (0-11)

// Array of month names
    const monthNames = [
    "JAn", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

   const currentMonthName = monthNames[monthNumber];
  
   const daysOfWeek = ["SUNDAY", "MONDAY", "THUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
   const currentDayName = daysOfWeek[currentDate.getDay()];
    return (
        <>
        <div className="datemain">
        <div className="DateContainer">
            <div class="daydate">{currentDay}</div>
            <div class="monthyear">
            <span><b>{currentMonthName}</b></span>
            <span>{currentYear}</span>
            </div>
        </div>
        <div className="datename"><b>{currentDayName}</b></div>
        </div>
        </>
    )
}
