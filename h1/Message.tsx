import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropsType) {
    return (
       <div className={s.blokStyle}>
            <img src={props.avatar} alt="" className={s.imgStyle}/>
           <div className={s.blokMessage}>
               <div className={s.messageContent}>
                <p className={s.name}> {props.name} </p>
                <p className={s.message}> {props.message}</p>
                <p className={s.time}> {props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default Message;
