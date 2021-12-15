import React from "react"
import { H1, H3 } from "../titles"
import { Container } from "./styles"
import { FormControlled } from "../form"
import { fetchData } from "../../utils/fetchData"

/**
 * 
 * @param {string} title Page title
 * @param {string} description page description
 * @param {function} setIssues
 * @returns 
 */
export const Header = ({ title, description, setIssues }) => {
    const handleSubmitFormControlled = (formValues) => (
        fetchData(`https://api.github.com/repos/${formValues.values.username}/${formValues.values.repository}/issues`).then(result => {
            setIssues && setIssues(result)
        })
    )
    return (
        <Container>
            <H1>{title}</H1>
            <H3>{description}</H3>
            <FormControlled handleSubmit={handleSubmitFormControlled} />
        </Container>
    )
}