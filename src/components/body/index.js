import React, { useState, useEffect } from "react"
import { Container } from "./styles"
import { Issue } from "../issues"

export const Body = ({issues, setIsOpen, ...props}) => {
    const [newIssues, setNewIssues] = useState([])
    useEffect(() => {
        issues && setNewIssues(issues)
    }, [issues])
    return (
        <Container>
            {newIssues.length > 0 && newIssues.map((item, key) => {
                return(
                    <Issue data={item} key={key} onClick={setIsOpen(true)}/>
                )
            })}
        </Container>
    )
}
