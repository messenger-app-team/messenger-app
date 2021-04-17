// this is send button
import React from "react";
import { Button } from "react-bootstrap";

// const Send = () => {
//     console.log("click")
// };

function Send() {
    return <Button onClick={console.log('click')}>Send</Button>;
};


export default Send;