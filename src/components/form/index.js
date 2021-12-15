import React from "react"
import { Button } from "../button"
import { Input } from "../input"
import { InputGroup } from "../inputGorup"
import { WithFormControlled } from "./formControlled"
  
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
            <Button type="submit" text="Find" />
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
  
  