import React, { FC } from 'react';

import { ImageInterface } from '../../interfaces/interfaces';
import { StyledImage } from './StyleImage';

export const Image: FC<ImageInterface> = ({ icon }) => {
    return (
        <StyledImage>
            <img src={icon} />
        </StyledImage>
    )
}