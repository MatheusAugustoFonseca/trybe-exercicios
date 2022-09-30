import React from 'react'
import { READ, UNREAD } from '../constants/index';
import read from '../icons/read.svg';
import unread from '../icons/unread2.svg';


export default function List({messages, setMessagenStatus}) {
  return (
    <div>
      <ul className="messages-list">
        {messages.map((email) => {
          const messageClass = email.status === READ ? 'message-read' : 'message-unread';

          return (
          <li key={email.id}>
            <p className={`message-title ${messageClass}`}>
              {email.title}
            </p>
            <div>
              <button type="button"
              title="mark as read"
              onClick={ () => setMessagenStatus(email.id, READ)}>
                <img src={ read } alt="read email simbol"/>
                {/* READ */}
              </button>
              <button type="button"
              title="mark as unread"
              onClick={ () => setMessagenStatus(email.id, UNREAD)}>
                {/* UNREAD */}
                <img src={ unread } alt="unread email simbol"/>
              </button>
            </div>
          </li>

          )
        })}

      </ul>
    </div>
  )
}
