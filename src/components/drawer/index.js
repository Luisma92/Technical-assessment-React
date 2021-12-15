import React from "react"
import { brightnessByColor } from "../../utils/colorBrightness"
import { Avatar } from "../avatar"
import { Badge } from "../badge"
import { CloseIcon } from "../closeIcon"
import { Comments } from "../comments"
import { CommentIcon } from "../comments/commentIcon"
import { Date } from "../date"
import { FlexInfo } from "../issues/styles"
import { Text } from "../text"
import { DrawerInfo, Overlay, StyledDrawer } from "./styles"

/**
 * Show issues detail in drawer
 * @param {object} data 
 * @param {boolean} isOpen default false
 * @param {callBack} handleOpen
 * @returns 
 */
export const Drawer = ({data, isOpen, handleOpen, ...props}) => {
   
    return (  
        <>
        {isOpen && <> 
        <Overlay onClick={() => handleOpen && handleOpen(false, false)}/>  
        <StyledDrawer isOpen={isOpen}>
            <FlexInfo css={'position: absolute; right: 2rem; top: 2rem; cursor: pointer; &:hover > svg{fill: #0070ff;}'} onClick={() => handleOpen && handleOpen(false, false)}>
                <CloseIcon size="1.5rem" color="#ffffff" />
            </FlexInfo>
            <Avatar avatar={data.user.avatar_url} firstName={data.user.login} size="5rem"/>
            <Text>{data.user.login}</Text>
            <DrawerInfo>               
                <Badge color={data.pull_request ? '#298029' : '#d03434'}>
                    <Text size="0.75rem" color='white' css={'margin-block-start: 0; margin-block-end: 0;'}>{data.pull_request ? `pull-${data.number}` : `issue-${data.number}`}</Text>                           
                </Badge>
                <Text weight="600" size="1.125rem">{data.title}</Text>               
                <Text>{data.body}</Text>               
                <FlexInfo>
                    <Date date={data.created_at} />
                    <CommentIcon size="1rem" color="#a8a1a1" />
                    <Text size="0.85rem" color="#a8a1a1">{data.comments}</Text>
                </FlexInfo>
                <FlexInfo>
                    {data.labels.length > 0 && data.labels.map((label, key) => {
                        return (
                            <Badge color={`#${label.color}`} key={key}>
                                <Text size="0.75rem" color={brightnessByColor(`#${label.color}`) > 125 ? 'black' : 'white'} css={'margin-block-start: 0; margin-block-end: 0;'}>{label.name}</Text>                           
                            </Badge>
                        )
                    })}
                </FlexInfo>
            </DrawerInfo>
            <Text size="1.5rem" weight="700" css={'margin-top: 1.5rem'}>Comments</Text>
            <Comments number={data.number} url={data.repository_url} />
        </StyledDrawer> 
        </>
        }
        </>
    )
}