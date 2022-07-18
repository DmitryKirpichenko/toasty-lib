import React, {FC } from 'react';
import { CloseButtonInterface } from '../../interfaces/interfaces';
import { StyledCloseButton } from './StyleCloseButton';
import crossIcon from '../../images/svg/cross.svg'

export const CloseButton:FC<CloseButtonInterface> = ({id, color, onClick}) => {
    return (
        <StyledCloseButton
            onClick={onClick(id)}
            style={{
                color: color,
            }}
        >
            <img className="close" src={crossIcon} />
        </StyledCloseButton>
    )
}