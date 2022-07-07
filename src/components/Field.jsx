import React from 'react';
import Input from './Input/Input';
import RadioButton from './Input/RadioButton';

const Field = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    default:
      return null;
  }
};

export default Field;
