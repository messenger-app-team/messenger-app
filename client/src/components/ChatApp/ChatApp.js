// import React, { useState, useEffect } from 'react';
// import Avatar from './Avatar';
import InputBox from '../InputBox/InputBox';
import MsgArea from '../MsgArea/MsgArea';
// import Send from './Send';

function ChatApp() {
  return (
    <div className='container'>
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
