import React from "react"
import { brightnessByColor } from "../../utils/colorBrightness"
import useWindowSize from "../../utils/useWindowSize"
import { Avatar } from "../avatar"
import { Badge } from "../badge"
import { CommentIcon } from "../comments/commentIcon"
import { Date } from "../date"
import { Text } from "../text"
import { FlexInfo, StyledIssue, StyledUser } from "./styles"

/**
 * 
 * @param {object} data issue data
 * @param {callBack} handleOpen to handle Drawer
 * @returns 
 */
export const Issue = ({ data, handleOpen,...props}) => {
    const {width} = useWindowSize()

    return (
        <StyledIssue onClick={() => handleOpen && handleOpen(true, data)}>
            <StyledUser>
                <Avatar avatar={data.user.avatar_url} firstName={data.user.login} size={width >= 768 ? '4rem' : '3rem'}/>                
            </StyledUser>
            <div>
                <FlexInfo css={'position: absolute; top: 0; right: 0.5rem;'}>
                    <Date date={data.created_at} />
                    <CommentIcon size={width >= 768 ? '1rem' : '0.75rem'} color="#a8a1a1" />
                    <Text size={width >= 768 ? '0.875erm' : '0.7rem'} color="#a8a1a1">{data.comments}</Text>
                </FlexInfo>
                <Text size={width >= 768 ? '' : '0.875rem'} css={'margin-right: 1rem; white-space: nowrap;'}>{data.user.login}</Text>               
                <Badge color={data.pull_request ? '#298029' : '#d03434'}>
                    <Text size={width >= 768 ? '0.75rem' : '0.7rem'} color='white' weight={600} css={'margin-block-start: 0; margin-block-end: 0;'}>{data.pull_request ? `pull-${data.number}` : `issue-${data.number}`}</Text>                           
                </Badge>
                <Text weight={width >= 768 ? '600' : ''} size={width >= 768 ? '' : '0.875rem'}>{data.title}</Text>
            </div>
            <FlexInfo css={'position: absolute; right: .5rem; bottom: .5rem; flex-wrap: wrap;'}>
                {data.labels.length > 0 && data.labels.map((label, key) => {
                    return (
                        <Badge color={`#${label.color}`} key={key}>
                            <Text size={width >= 768 ? '0.75rem' : '0.7rem'} color={brightnessByColor(`#${label.color}`) > 125 ? 'black' : 'white'} css={'margin-block-start: 0; margin-block-end: 0;'}>{label.name}</Text>                           
                        </Badge>
                    )
                })}
            </FlexInfo>
        </StyledIssue>    
    )
}