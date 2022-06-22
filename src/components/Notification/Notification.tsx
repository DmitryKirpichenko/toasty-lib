import React, {FC} from 'react';
import { CloseButton } from '../CloseButton/CloseButton';
import { Title } from '../Title/Title';
import { Message } from '../Message/Message';
import { Image } from '../Image/Image';
import { NotificationInterface } from '../../interfaces/interfaces';

export const Notification: FC<NotificationInterface> =
   ({ toast,
      mouseDownHandel,
      mouseUpHandel,
      position,
      ClickHandel}) => {

      return (
         //<ErrorBoundary>

         <div
            key={toast.id + 1}
            id={(toast.id + 1).toString()}
            className={`notification toast ${position}`}
            style={{
               backgroundColor: toast.backgroundColor,
               padding: toast.toastPadding,
            }}
            onMouseDown={(e) => mouseDownHandel(e, toast.id + 1)}
            onClick={(e) => mouseUpHandel(e, toast.id + 1)}
         >
            <CloseButton id={toast.id} onClick={ClickHandel} color={toast.titleColor} />

            <Image icon={toast.icon} />

            <div>
               <Title color={toast.titleColor} text={toast.title} />

               <Message color={toast.descColor} text={toast.description} />
            </div>
         </div>

      );
   };
