import React from "react"
import { CalendarIcon } from "./calendarIcon"
import { StyledDate } from "./styles"
import { parseISO, format } from 'date-fns'
import useWindowSize from "../../utils/useWindowSize"

/**
 * Show the Date 
 * @param {date} date 
 * @returns 
 */
export const Date = ({date, ...props}) => {
    const {width} = useWindowSize()

    return (
        <StyledDate>
            <CalendarIcon size={width >= 768 ? '1rem' : '0.75rem'} color="#a8a1a1"/> 
            {format(parseISO(date), 'MMM do, y')}
        </StyledDate>
    )
}
