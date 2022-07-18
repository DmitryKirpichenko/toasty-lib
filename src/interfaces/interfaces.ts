import React, { ReactNode } from "react";

export interface NotificationContainerInterface {
    toastList: ClassListInterface[];
    position: string;
    autoDelete: boolean;
    autoDeleteTime: number;
    animation: string;
}
export interface NotificationInterface {
    toast: ClassListInterface,
    mouseDownHandel: () =>(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void,
    mouseUpHandel: (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void,
    position: string,
    ClickHandel: (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export interface ClassPropInterface {
    toastId?: number,
    padding?: string,
    type: string,
    position: string,
    autoDelete: boolean,
    delay: number,
    animation: string,
}
export interface ClassListInterface extends ClassPropInterface {
    id: number,
    description: string,
    toastPadding: string,
    title: string,
    titleColor: string,
    descColor: string,
    backgroundColor: string,
    icon: string
}
export interface StyledNotificationInterface {
    animation?: string;
}
export interface CloseButtonInterface {
    id: number;
    onClick: (id: number) => (e: React.SyntheticEvent) => void;
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