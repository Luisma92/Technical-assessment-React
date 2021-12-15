import React from "react"
import { CustomButton } from "./styles"

export const Button = ({ text, ...props}) => (
    <CustomButton {...props}>{text}</CustomButton>
)