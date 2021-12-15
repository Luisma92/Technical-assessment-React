import React from "react";
import { AvatarImg, AvatarLetter } from "./styles";

const COLORS = [
    '#E53E3E',
    '#ED8936',
    '#ECC94B',
    '#48BB78',
    '#4FD1C5',
    '#4299E1',
    '#667EEA',
    '#9F7AEA',
    '#ED64A6',
    '#B83280',
];

const getColorByName = name => {
    if (name) {
        const firstCharacter = String(name).charCodeAt(0);
        return COLORS[Number(String(firstCharacter).length)]
    }
    return '#C6E2FF'
};

export const Avatar = ({avatar, firstName, size, ...props}) => {
    
    return avatar && avatar !== 'undefined' ?
        <>
            <div>
                <AvatarImg style={{backgroundImage: `url(${avatar})`, backgroundSize: 'cover'}} size={size} {...props}
                    onError={(e) => {
                        e.target.css('background-image',`image(${UndefinedImage})`)
                    }}
                />
            </div>
        </>
        :
        <div>
            <AvatarLetter firstName={firstName} getColorByName={getColorByName} size={size} {...props}>
                {firstName.charAt(0).toUpperCase()}
            </AvatarLetter>
        </div>
};

Avatar.defaultProps = {
    size: '4rem'
};

