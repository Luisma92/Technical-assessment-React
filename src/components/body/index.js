import React, { useState, useEffect } from "react"
import { Container } from "./styles"
import { Issue } from "../issues"
import { Text } from "../text"

/**
 * 
 * @param {object} issues list of issues from repository
 * @param {callBack} handleOpen  
 * @returns 
 */
export const Body = ({issues, handleOpen, ...props}) => {
    const [newIssues, setNewIssues] = useState([])
    useEffect(() => {
        issues && setNewIssues(issues)
    }, [issues])

    return (
        <Container>           
            {newIssues.length > 0 ? newIssues.map((item, index) => {
                return(
                    <Issue data={item} key={index} handleOpen={handleOpen}/>
                )
            }, this)
        :
        <Text size="1.5625rem" weight="700" css={'margin-top: 7rem; text-align: center;'}>No items found</Text>
        }
        </Container>
    )
}
