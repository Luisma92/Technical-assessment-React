import React from "react"
import { Button } from "../button"
import { Input } from "../input"
import { InputGroup } from "../inputGorup"
import { Flex } from "../inputGorup/styles"
import { WithFormControlled } from "./formControlled"
 
/**
 * Show Search form
 * @returns 
 */
const Form = ({ 
    _handleChange,
    _handleSubmit,
    _onBlur,
    values,
    validations
  }) => (
    <form onSubmit={_handleSubmit}>
        <InputGroup>
            <Input 
                name="username"
                placeholder="username"
                onChange={_handleChange}
                value={values.username}
                onBlur={_onBlur}
                error={validations.username}
            />
            <Input
                name="repository"
                placeholder="repository"
                onChange={_handleChange}
                value={values.repository}
                onBlur={_onBlur}
                error={validations.repository}
            />  
            <Flex css={'@media screen and (max-width: 767px){ width: 70%;}'}>
                <Button type="submit" text="Find" css={'background-color: #1879e1; color: #ffffff;'} hover={'background-color: #004fa4'}/>
            </Flex> 
        </InputGroup>
    </form>
)
  
const initialState = { 
    values: {
        username: '', 
        repository: '' 
    },
    validations:{
        username: [], 
        repository: []
    }
}
export const FormControlled = WithFormControlled(Form, initialState)
  
  