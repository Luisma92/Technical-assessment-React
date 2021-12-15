import React from "react"

class Validator {
    constructor (value) {
        this.value = value
        this.result = []
    }

    isNotEmpty (msg) {
        if (!this.value) {
            this.result.push(msg)
        }
        return this
    }
    
    isLength (minLength, maxLength, msg) {
        if (this.value.length < minLength || this.value.length > maxLength) {
            this.result.push(msg)
        }
        return this
    }

}

export const WithFormControlled = (Form, initialState) => (
    class FormWithControlled extends React.Component {
        constructor (props) {
            super(props)
            
            this.state = {
            ...initialState
            }
        }
        validateAll = () => {
            const { username, repository } = this.state.values
            const validations = this.state.validations
            
            validations.username = this.validateField(username)
            validations.repository = this.validateField(repository)
        
            const validationMesages = Object.values(validations).filter(validationMessage => validationMessage.length > 0)
            const isValid = !validationMesages.length
            
            if (!isValid) {
              this.setState({ validations })
            }
            
            return isValid
        }

        validateOne = (e) => {
            const { name } = e.target
            const value = this.state.values[name]
            let message = ''
            
            if (!value) {
                message = `${name} is required`
            }
            
            if (value && (name === 'username' || name === 'repository') && (value.length < 3 || value.length > 50)) {
                message = ' The field must contain at least 3 characters'
            }
            
            this.setState({
                validations: {
                    ...this.state.validations,
                    [name]: message
                }
            })
        }

        validateField = (field) => {
            const validatorField = new Validator(field)
            return validatorField
                .isNotEmpty('The field is required')
                .isLength(3, 50, ' The field must contain at least 3 characters')
                .result
        }
        
        handleChange = (e) => {
            const { name, value } = e.target
            this.setState({ 
                values: {
                ...this.state.values,
                [name]: value
              }
            })
        }
    
        handleSubmit = (e) => {
            e.preventDefault()
            const isValid = this.validateAll()    
            if (!isValid) {
                return false
            }
            this.props.handleSubmit(this.state)
        }
    
        render () {
            return (
                <Form
                    {...this.props}
                    values={this.state.values}
                    validations={this.state.validations}
                    _handleSubmit={this.handleSubmit}
                    _handleChange={this.handleChange} 
                    _onBlur={this.validateOne}
                />
            )
        }
    }
)