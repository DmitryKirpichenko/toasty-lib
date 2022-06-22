import React, { useState, useEffect, FC } from 'react';
import { StyledNotification } from './StyleNotification';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import { Notification } from '../../components/Notification/Notification';
import { NotificationContainerInterface } from '../../interfaces/interfaces';

export const NotificationContainer: FC<NotificationContainerInterface> =
   ({ toastList,
      position,
      autoDelete,
      autoDeleteTime,
      animation  }) => {

      const [list, setList] = useState(toastList);

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
                     <Notification toast={toast} 
                                   mouseDownHandel={mouseDownHandel} 
                                   mouseUpHandel={mouseUpHandel}
                                   position={position}
                                   ClickHandel={ClickHandel}/>
                  ))}
               </div>
            </StyledNotification>
         //</ErrorBoundary>
      );
   };
