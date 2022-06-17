import styled from 'styled-components';
import { StyledNotificationInterface } from '../../interfaces/interfaces';

export const StyledNotification = styled.div<StyledNotificationInterface>`
   .notification-container {
      font-size: 14px;
      box-sizing: border-box;
      position: fixed;
      z-index: 10;
   }
   .top-right {
      top: 10px;
      right: 10px;
      transition: transform 0.6s ease-in-out;
      animation: ${(props) => (props.animation)} 0.7s;
   }
   .bottom-right {
      bottom: 10px;
      right: 10px;
      transition: transform 0.6s ease-in-out;
      animation: ${(props) => (props.animation)} 0.7s;
   }
   .top-left {
      top: 10px;
      left: 10px;
      transition: transform 0.6s ease-in;
      animation: ${(props) => (props.animation)} 0.7s;
   }
   .bottom-left {
      bottom: 10px;
      left: 10px;
      transition: transform 0.6s ease-in;
      animation: ${(props) => (props.animation)} 0.7s;
   }
   .notification {
      width: 600px;
      max-height: 180px;
      margin: 0 0 6px;
      padding: 30px;
      margin-bottom: 15px;
      background: #fff;
      transition: 0.3s ease;
      position: relative;
      pointer-events: auto;
      overflow: hidden;
      border-radius: 3px 3px 3px 3px;
      box-shadow: 4px 4px 8px #00000029;
      border-radius: 24px;
      color: black;
      opacity: 0.9;
      background-position: 15px;
      background-repeat: no-repeat;
   }
   .toast {
      height: 50px;
      width: 365px;
      color: black;
   }
   @keyframes toast-in-right {
      from {
         transform: translateX(100%);
      }
      to {
         transform: translateX(0);
      }
   }
   @keyframes toast-from-top {
      from {
         transform: translateY(-100%);
      }
      to {
         transform: translateY(0);
      }
   }
   @keyframes toast-from-bottom {
      from {
         transform: translateY(100%);
      }
      to {
         transform: translateY(0);
      }
   }
   @keyframes toast-in-left {
      from {
         transform: translateX(-100%);
      }
      to {
         transform: translateX(0);
      }
   }
   @keyframes close-in-right {
      from {
         transform: translateX(0);
      }
      to {
         transform: translateX(100%);
      }
   }
   @keyframes close-in-left {
      from {
         transform: translateX(0);
      }
      to {
         transform: translateX(-100%);
      }
   }
   .close-rigth {
      transition: transform 0.6s ease-in-out;
      animation: close-in-right 0.7s;
   }
   .close-left {
      transition: transform 0.6s ease-in-out;
      animation: close-in-left 0.7s;
   }
`;
