import React, { FC } from 'react';

import { TitleInterface } from '../../interfaces/interfaces';
import { StyledTitle } from './StyleTitle';

export const Title: FC<TitleInterface> = ({ color, text }) => {
    return (
        <StyledTitle
            style={{
                color: color,
            }}
        >
            {text}
        </StyledTitle>
    )
}