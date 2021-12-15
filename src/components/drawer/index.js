import React from "react"
import { StyledDrawer } from "./styles"

export const Drawer = ({data, isOpen, setIsOpen, ...props}) => {
    return (
        <StyledDrawer isOpen={isOpen} />
    )
}