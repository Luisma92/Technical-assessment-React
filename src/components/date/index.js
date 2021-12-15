import React from "react"
import { CalendarIcon } from "./calendarIcon"
import { StyledDate } from "./styles"
import { parseISO, format } from 'date-fns'

export const Date = ({date, options, ...props}) => {

    const formatDate = (date) => {
        const newDate = date.toLocaleString()
        return newDate
    }

    return (
        <StyledDate>
            <CalendarIcon size="1rem" color="#a8a1a1"/> 
            {format(parseISO(date), 'MMM do, y hh:mm aaa')}
        </StyledDate>
    )
}
