import { useState } from "react";

export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState( initialState );

  const reset = ( newFormState = initialState ) => {
    setValues( newFormState );
    /*
      This could be redundant, although useState ignore its argument
      after the first render, if initialState change in the component
      it's passed with its current value, that is,
      setValues( newFormState ) == setValues( initialState )
    */
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    });
  };

  return [ values, handleInputChange, reset ];

};
