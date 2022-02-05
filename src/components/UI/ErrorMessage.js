import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../Button";
import Card from "./Card";
import stylesss from "./ErrorMessage.module.css";
import ReactDom from "react-dom";
import reactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={stylesss.backdrop} onClick={props.onConfirm} />;
};

const OverLayee = (props) => {
  return (
    <Card className={stylesss.modal}>
      <header className={stylesss.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={stylesss.content}>
        <p>{props.message}</p>
      </div>
      <footer className={stylesss.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorMessage = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("back-drop")
      )}

      {ReactDom.createPortal(
        <OverLayee
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("over-message")
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
