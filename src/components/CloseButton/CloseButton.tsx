import React, { useState, useEffect, FC } from 'react';
import { CloseButtonInterface } from '../../interfaces/interfaces';
import { StyledCloseButton } from './StyleCloseButton';
const crossIcon = require('../../images/svg/cross.svg') as string;

export const CloseButton:FC<CloseButtonInterface> = ({id, color, onClick}) => {
    return (
        <StyledCloseButton
            onClick={(e) => onClick(e, id)}
            style={{
                color: color,
            }}
        >
            <img className="close" src={crossIcon} />
        </StyledCloseButton>
    )
}