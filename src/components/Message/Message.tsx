import React, { FC } from 'react';

import { MessageInterface } from '../../interfaces/interfaces';
import { StyledMessage } from './StyleMessage';

export const Message: FC<MessageInterface> = ({ color, text }) => {
    return (
        <StyledMessage
            style={{
                color: color,
            }}
        >
            {text}
        </StyledMessage>
    )
}