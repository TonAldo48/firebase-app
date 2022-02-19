import React from 'react';


export const ChatContext = React.createContext();

export const ChatContextProvider = ({ children, conversations }) => {
    return (
        <conversations/>
    )
}