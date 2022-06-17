import { toast } from '../container/LogicNotification';

export default {
   title: 'Toast',
   argTypes: {
      toastType: {
         control: {
            type: 'inline-radio',
            options: ['error', 'warning', 'success', 'info'],
         },
      },
      toastPosition: {
         control: {
            type: 'inline-radio',
            options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
         },
      },
      toastIsAutoDelete: {
         control: {
            type: 'boolean',
         },
      },

      animation: {
         control: {
            type: 'inline-radio',
            options: ['toast-from-top', 'toast-from-bottom', 'toast-in-right ', 'toast-in-left'],
         },
      },
      description: {
         control: {
            type: 'text',
         },
      },
   },
};

export const ToastExample = (args: any) =>
   toast.showToast(args.description, {
      type: args.toastType,
      position: args.toastPosition,
      autoDelete: args.toastIsAutoDelete,
      delay: args.toastAutoDeleteTime,
      animation: args.animation,
   });

ToastExample.args = {
   toastType: 'error',
   toastPosition: 'top-right',
   toastIsAutoDelete: true,
   toastAutoDeleteTime: 3000,
   animation: '',
   description: 'Description',
};
