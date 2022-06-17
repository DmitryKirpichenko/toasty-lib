import React from 'react';
import { NotificationContainer } from '../container/NotificationContainer/NotificationContainer'; 
import { Portal } from '../portal/portal';
const errorIcon = require('../images/svg/error.svg') as string;
const infoIcon = require('../images/svg/info.svg') as string;
const warningIcon = require('../images/svg/warning.svg') as string;
const successIcon = require('../images/svg/success.svg') as string;
import {
   RED,
   YELLOW,
   GREEN,
   PURPLE,
   ERROR,
   SUCCESS,
   INFO,
   WARNING
} from '../constants/index'

let toastList: string[] = [];

class NotificationClass {
   toastList: string[] | undefined;
   private static singleton: NotificationClass;
   constructor(toastList: string[]) {
      if (NotificationClass.singleton) {
         return NotificationClass.singleton;
      }
      NotificationClass.singleton = this;
      this.toastList = toastList;
   }

   getId() {
      return Math.floor(Math.random() * 101);
   }

   getTitleName(prop) {
      switch (prop.type) {
         case SUCCESS:
            return 'Success';
         case ERROR:
            return 'Error';
         case INFO:
            return 'Info';
         case WARNING:
            return 'Warning';
         default:
            return 'Custom';
      }
   }

   getTitleColor(prop) {
      switch (prop.type) {
         case SUCCESS:
            return 'WHITE';
         case ERROR:
            return 'BLACK';
         case INFO:
            return 'WHITE';
         case WARNING:
            return 'BLACK';
         default:
            return 'BLACK';
      }
   }

   getBackgroundColor(prop) {
      switch (prop.type) {
         case SUCCESS:
            return GREEN;
         case ERROR:
            return RED;
         case INFO:
            return PURPLE;
         case WARNING:
            return YELLOW;
         default:
            return 'GRAY';
      }
   }

   getIcon(prop) {
      switch (prop.type) {
         case SUCCESS:
            return successIcon;
         case ERROR:
            return errorIcon;
         case INFO:
            return infoIcon;
         case WARNING:
            return warningIcon;
         default:
            return successIcon;
      }
   }

   getIndent(prop) {
      console.log(prop.position.split('-'))
      switch (prop.position.split('-')[1]) {
         case 'right':
            return { name: 'right', indent: 10 };
         case 'left':
            return { name: 'left', indent: 10 };
         default:
            return { name: 'left', indent: 10 };
      }
   }

   getProp(desc, prop) {
      return {
         ...prop,
         id: prop.toastId || this.getId(),
         description: desc || 'Description',
         toastPadding: prop.padding || '',
         title: this.getTitleName(prop),
         titleColor: this.getTitleColor(prop),
         descColor: this.getTitleColor(prop),
         backgroundColor: this.getBackgroundColor(prop),
         icon: this.getIcon(prop),
         indent: this.getIndent(prop),
      };
   }

   showToast(desc, prop) {
      if (toastList.length < 5) {
         toastList = [...toastList, this.getProp(desc, prop)];
      }

      return (
         <Portal>
            <NotificationContainer
               toastList={toastList}
               position={prop.position}
               autoDelete={prop.autoDelete}
               autoDeleteTime={prop.delay}
               animation={prop.animation}
            />
         </Portal>
      );
   }
}

export const toast = new NotificationClass(toastList);
