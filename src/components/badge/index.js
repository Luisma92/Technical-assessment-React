import React from "react"
import { StyledBadge } from "./styles"

export const Badge = ({color, children}) => (
    <StyledBadge color={color} >
        {children}
    </StyledBadge>
)