import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Notification.css";

const Notification = forwardRef((props, ref) => {
  const [showNotification, setShowNotification] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    },
  }));
  return (
    <div className="notification" id={showNotification ? "show" : "hide"}>
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Notification;
