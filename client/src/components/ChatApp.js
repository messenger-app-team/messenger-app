import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import InputBox from './InputBox';
import MsgArea from './MsgArea';
import Send from './Send';

function ChatApp() {
  return (
    <>
      <div className='message-window'>
        <MsgArea />
        <Avatar />
        <InputBox />
        <Send />
      </div>
    </>
  );
}

export default ChatApp;
