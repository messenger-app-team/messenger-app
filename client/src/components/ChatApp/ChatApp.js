import React, { useState, useEffect } from 'react';
// import Avatar from './Avatar';
import NavBar from '../NavBar';
import InputBox from '../InputBox/index';
import MsgArea from '../MsgArea';
// import Send from './Send';

function ChatApp() {
  return (
    <div className='container'>
      <NavBar />
      <div className='message-window fixed-bottom'>
        <MsgArea />
        {/* <Avatar /> */}
        <InputBox />
        {/* <Send /> */}
      </div>
    </div>
  );
}

export default ChatApp;
