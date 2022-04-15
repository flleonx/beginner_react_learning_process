import React, {useState, useEffect} from "react";
import './effects.css';
import { Message } from "./Message";

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  // It executes something when the component is render for the first time
  useEffect( () => {
    // console.log('hey!')
  }, [] );

  // It executes something when the value of formState changes
  useEffect( () => {
    // console.log('Form state cambio')
  }, [formState] );

  // It executes something when the value of email changes
  useEffect( () => {
    // console.log('Email cambio')
  }, [email] );

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }

    </>
  )
}

export default SimpleForm
