import React, { useRef } from "react";
import useInput from "../../hooks/useInput";

import emailjs from "@emailjs/browser";
import Notification from "./Notification";
import "./Form.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const NotificationType = {
  success: "success",
  fail: "fail",
};

const Form = (props) => {
  const form = useRef();
  const notificationRef = useRef(null);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          notificationRef.current.show();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const messageClasses = messageHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="control-group">
        <div className={nameClasses} id="name_input">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p className="error-text">Please enter a name.</p>}
        </div>
        <div className={emailClasses} id="email_input">
          <label htmlFor="user_email">Email</label>
          <input
            type="text"
            name="user_email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className={messageClasses} id="message_input">
          <label htmlFor="message">Message</label>
          <textarea
            type="textarea"
            name="message"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError && (
            <p className="error-text">Please enter a message.</p>
          )}
        </div>
      </div>

      <div className="form-actions" id="button_submit">
        <button className="button_send" disabled={!formIsValid}>
          Send email
        </button>
      </div>
      <Notification
        ref={notificationRef}
        message="Thank you for sending an email!"
        type={NotificationType.success}
      />
    </form>
  );
};

export default Form;
