import React, { ReactNode } from "react";

export interface NotificationInterface {
    toastList: any;
    position: string;
    autoDelete: boolean;
    autoDeleteTime: number;
    animation: string;
}
export interface StyledNotificationInterface {
    animation?: string;
}
export interface CloseButtonInterface {
    id: number;
    onClick: (e: React.SyntheticEvent, id:number) => void;
    color: string;
}
export interface TitleInterface {
    color: string;
    text: string;
}
export interface MessageInterface {
    color: string;
    text: string;
}
export interface ImageInterface {
    icon: string;
}
export interface Props {
    children?: ReactNode;
  }
  
export interface State {
    hasError: boolean;
  }