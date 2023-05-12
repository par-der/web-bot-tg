import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from '../../hooks/useTelegram';

const Header = (props) => {
    const { user, onClose} = new useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}></span>
            <span className={'username'}>
                {user?.username} 
            </span>
        </div>
    );
};
export default Button;