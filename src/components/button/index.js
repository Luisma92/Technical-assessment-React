import React from "react"
import { CustomButton } from "./styles"

export const Button = ({ text, css, ...props}) => (
    <CustomButton css={css} {...props}>{text}</CustomButton>
)