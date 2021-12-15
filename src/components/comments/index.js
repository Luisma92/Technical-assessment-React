import React, { useEffect, useState } from "react"
import { Avatar } from "../avatar"
import { FlexInfo } from "../issues/styles"
import { fetchData } from "../../utils/fetchData"
import { Text } from "../text"
import { Date } from "../date"
import { ContainerComment } from "./styles"
import { Badge } from "../badge"

/**
 * For show issues' comments
 * @param {interger} number issue's number
 * @param {string} url repository url 
 * @returns 
 */
export const Comments = ({number, url, ...props}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchData(`${url}/issues/${number}/comments`).then(result => {
            setComments(result)
        })
    }, [number])

    return (
        <ContainerComment>
            {comments && comments.map((item, index) => {
                return (
                    <div key={index}>
                        <FlexInfo css={'& > div{margin-left: 1rem;}'}>
                            <Avatar avatar={item.user.avatar_url} firstName={item.user.login} size="3rem" />
                            <div>
                                <Text>{item.user.login}</Text> 
                                <FlexInfo css={'& > div{margin-left: 1rem;}'}>
                                    <Date date={item.created_at} />
                                    <Badge color='#1879e1'>
                                        <Text size="0.75rem" color='white' css={'margin-block-start: 0; margin-block-end: 0;'}>{item.author_association}</Text>                           
                                    </Badge>
                                </FlexInfo>
                            </div>
                        </FlexInfo>
                        <Text color="#d0caca" size="0.9375rem">{item.body}</Text> 
                    </div>

                )
            })}
        </ContainerComment>
    )
}