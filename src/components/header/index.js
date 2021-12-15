import React from "react"
import { H1, H3 } from "../titles"
import { Container } from "./styles"
import { FormControlled } from "../form"

async function fetchData(values){
    const result = await fetch(
      `https://api.github.com/repos/${values.values.username}/${values.values.repository}/issues`
    ).then(res => res.json())
    console.log(result)
    return result
}

export const Header = ({ title, description, setIssues }) => {
    const handleSubmitFormControlled = (formValues) => (
        fetchData(formValues).then(result => {
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