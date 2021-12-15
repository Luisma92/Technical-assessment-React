import React from "react"
import { brightnessByColor } from "../../utils/colorBrightness"
import { Avatar } from "../avatar"
import { Badge } from "../badge"
import { CommentIcon } from "../comments/commentIcon"
import { Date } from "../date"
import { Text } from "../text"
import { FlexInfo, StyledIssue, StyledUser } from "./styles"

export const Issue = ({ data, ...props}) => {
    return (
        <StyledIssue>
            <StyledUser>
                <Avatar avatar={data.user.avatar_url} firstName={data.user.login}/>                
                <Text css={'position: absolute; left: 0; bottom: 0; margin-right: 1rem; white-space: nowrap;'}>{data.user.login}</Text>
            </StyledUser>
            <div>
                <FlexInfo>
                        <Badge color={data.pull_request ? '#298029' : '#d03434'}>
                            <Text size="0.75rem" color='white' css={'margin-block-start: 0; margin-block-end: 0;'}>{data.pull_request ? `pull-${data.number}` : `issue-${data.number}`}</Text>                           
                        </Badge>
                    <Text weight="600">{data.title}</Text>
                </FlexInfo>
                <FlexInfo>
                    <Date date={data.created_at} />
                    <CommentIcon size="1rem" color="#a8a1a1" />
                    <Text size="0.85rem" color="#a8a1a1">{data.comments}</Text>
                </FlexInfo>
            </div>
            <FlexInfo css={'position: absolute; right: .5rem; bottom: .5rem;'}>
                {data.labels.length > 0 && data.labels.map((label, key) => {
                    return (
                        <Badge color={`#${label.color}`} key={key}>
                            <Text size="0.75rem" color={brightnessByColor(`#${label.color}`) > 125 ? 'black' : 'white'} css={'margin-block-start: 0; margin-block-end: 0;'}>{label.name}</Text>                           
                        </Badge>
                    )
                })}
            </FlexInfo>
        </StyledIssue>    
    )
}