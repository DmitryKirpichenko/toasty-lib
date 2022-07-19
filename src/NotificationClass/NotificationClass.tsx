import React from 'react';

import { NotificationContainer} from '../container/NotificationContainer/NotificationContainer'; 
import { ClassPropInterface, ClassListInterface  } from '../interfaces/interfaces';

import errorIcon  from '../images/svg/error.svg'
import infoIcon from '../images/svg/info.svg'
import warningIcon from '../images/svg/warning.svg'
import successIcon from '../images/svg/success.svg'

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

let toastList: ClassListInterface[] = [];

class NotificationClass {
   toastList: ClassListInterface[] | undefined;
   private static singleton: NotificationClass;
   constructor(toastList: ClassListInterface[]) {
      if (NotificationClass.singleton) {
         return NotificationClass.singleton;
      }
      NotificationClass.singleton = this;
      this.toastList = toastList;
   }

   getId(): number {
      return Math.floor(Math.random() * 101);
   }

   getTitleName(prop: ClassPropInterface): string {
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

   getTitleColor(prop: ClassPropInterface): string {
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

   getBackgroundColor(prop: ClassPropInterface): string {
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

   getIcon(prop: ClassPropInterface): string {
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

   getProp(desc: string, prop: ClassPropInterface): ClassListInterface {
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
      };
   }

   showToast(desc: string, prop: ClassPropInterface) {
      if (toastList.length < 5) {
         toastList = [...toastList, this.getProp(desc, prop)];
      }

      return (
            <NotificationContainer
               toastList={toastList}
               position={prop.position}
               autoDelete={prop.autoDelete}
               autoDeleteTime={prop.delay}
               animation={prop.animation}
            />
      );
   }
}

export const toast = new NotificationClass(toastList);
