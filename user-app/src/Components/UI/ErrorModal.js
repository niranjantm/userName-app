import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";
export default function ErrorModal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.ondismiss}></div>;
  };
  const OverLay = () => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type={props.type} onClick={props.ondismiss}>
            {props.children}
          </Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop ondismiss={props.ondismiss}></Backdrop>,
        document.getElementById("backDrop")
      )}
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          type={props.type}
          children={props.children}
          ondismiss={props.ondismiss}
        ></OverLay>,(document.getElementById("overLay"))
      )}
    </React.Fragment>
  );
}
