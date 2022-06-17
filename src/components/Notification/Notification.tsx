import React, { useState, useEffect, FC } from 'react';
import { NotificationInterface } from '../../interfaces/interfaces';
import { StyledNotification } from './StyleNotification';
import { CloseButton } from '../CloseButton/CloseButton';
import { Title } from '../Title/Title';
import { Message } from '../Message/Message';
import { Image } from '../Image/Image';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
const crossIcon = require('../../images/svg/cross.svg') as string;


export const Notification: FC<NotificationInterface> =
   ({ toastList,
      position,
      autoDelete,
      autoDeleteTime,
      animation  }) => {

      const [list, setList] = useState([toastList]);

      useEffect(() => {
         setList([...toastList]);
      }, [toastList]);

      useEffect(() => {
         const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
               deleteToast(toastList[0].id);
            }
         }, autoDeleteTime);

         return () => {
            clearInterval(interval);
         };
      }, [toastList, autoDelete, autoDeleteTime, list]);

      const deleteToast = (id: number) => {
         const listItemIndex = list.findIndex((i) => i.id === id);
         const toastListItem = toastList.findIndex((i) => i.id === id);
         list.splice(listItemIndex, 1);
         toastList.splice(toastListItem, 1);
         setList([...list]);
      };

      function ClickHandel(e: React.SyntheticEvent, id: number) {
         deleteToast(id)
      }

      let mouseX: number

      function mouseUpHandel(e:React.MouseEvent<HTMLDivElement, MouseEvent>, id: number){
         if(Math.abs(mouseX - e.clientX) > 50){
            if(mouseX - e.clientX < 0) document.getElementById(`${id}`).classList.add('close-rigth')
            else document.getElementById(`${id}`).classList.add('close-left')
            
            setTimeout(() => deleteToast(id - 1), 600)
            
         }
         
      }

      function mouseDownHandel(e:React.MouseEvent<HTMLDivElement, MouseEvent>, id: number){
         mouseX = e.clientX
      }

      return (
         //<ErrorBoundary>
            <StyledNotification animation={animation}>
               <div className={`notification-container ${position}`}>
                  {list.map((toast) => (
                     <div
                        key={toast.id + 1}
                        id={toast.id + 1}
                        className={`notification toast ${position}`}
                        style={{
                           backgroundColor: toast.backgroundColor,
                           padding: toast.toastPadding,
                        }}
                        onMouseDown={(e) => mouseDownHandel(e, toast.id + 1)}
                        onClick={(e) => mouseUpHandel(e , toast.id + 1)}
                     >
                        <CloseButton id={toast.id} onClick={ClickHandel} color={toast.titleColor} />

                        <Image icon={toast.icon} />

                        <div>
                           <Title color={toast.titleColor} text={toast.title} />

                           <Message color={toast.descColor} text={toast.description} />
                        </div>
                     </div>
                  ))}
               </div>
            </StyledNotification>
         //</ErrorBoundary>
      );
   };
