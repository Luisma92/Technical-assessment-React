import React from "react"
import PropTypes from "prop-types"
import { Block, Column, CustomImput } from "./styles"


export const Input = ({ type, placeholder, name, disabled, error,...props }) => (
    <Column>
        <CustomImput type={type} placeholder={placeholder} name={name} disabled={disabled} error={error} {...props}/>
        {error}
    </Column>

)

Input.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
}
  
Input.defaultProps = {
    type: 'text',
    disabled: false,
}