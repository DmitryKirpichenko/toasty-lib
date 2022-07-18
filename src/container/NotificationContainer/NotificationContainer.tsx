import React, { useState, useEffect, FC } from 'react';
import { StyledNotification } from './StyleNotification';
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

      const ClickHandel = (id: number) => (e: React.SyntheticEvent) => {
         deleteToast(id)
      }

      let mouseX: number

      const  mouseUpHandel = (id: number) => (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
         console.log('11111')
         if(Math.abs(mouseX - e.clientX) > 50){
            if(mouseX - e.clientX < 0) document.getElementById(`${id}`).classList.add('close-rigth')
            else document.getElementById(`${id}`).classList.add('close-left')
            
            setTimeout(() => deleteToast(id - 1), 600)
            
         }
         
      }

      const  mouseDownHandel = () => (e:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
         console.log('22222')
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
                                   ClickHandel={ClickHandel}
                                   key={toast.id + 1}/>
                  ))}
               </div>
            </StyledNotification>
         //</ErrorBoundary>
      );
   };
