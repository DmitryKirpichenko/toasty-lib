import React, { useEffect, FC } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC<{children: React.ReactElement}> = ({ children }) => {
    const cont = document.createElement('div');
    document.body.appendChild(cont);
    cont.setAttribute('id', 'toast-root');

    const elem = document.createElement('div');
    elem.setAttribute('id', 'notification-wrapper');

    useEffect(() => {
        cont.appendChild(elem);
        return () => {
            cont.removeChild(elem);
            document.getElementById('toast-root').remove();
        };
    }, [elem, cont]);

    return createPortal(children, elem);
};