import React, { useState, useRef } from "react";
import Button from "../Button";
import Card from "../UI/Card";
import ErrorMessage from "../UI/ErrorMessage";
import stylesss from "./AddUser.module.css";
const AddUser = (props) => {
  // const [valuueName, setValuueName] = useState("");
  // const [valuueAge, setValuueAge] = useState("");
  const [error, setError] = useState("");

  const RefName = useRef();
  const RefAge = useRef();

  // const NameSavehandler = (event) => {
  //   setValuueName(event.target.value);
  // };

  // const AgeSavehandler = (event) => {
  //   setValuueAge(event.target.value);
  // };

  const onChangeSubmithandler = (event) => {
    
    event.preventDefault();
     const NameValueRef = RefName.current.value;
     const AgeValueRef = RefAge.current.value;

    if (NameValueRef.trim().length === 0 || AgeValueRef.trim().length === 0) {
      setError({ title: "No value", message: "Try Fill Up All The Inputs" });
      return;
    }
    if (AgeValueRef < 1) {
      setError({ title: "Age", message: "Your age must be > 0" });
      return;
    }
    props.onAdduser(NameValueRef, AgeValueRef);
    RefName.current.value ='';
    RefAge.current.value = '';

  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorMessage
          message={error.message}
          title={error.title}
          onConfirm={errorHandler}
        />
      )}
      <Card className={stylesss.input}>
        <form onSubmit={onChangeSubmithandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            
            ref={RefName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
           
            ref={RefAge}

          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
