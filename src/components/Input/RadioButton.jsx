import { FormControlLabel, Radio, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

const RadioButton = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControlLabel
      label={
        <Typography color="text.secondary" variant="body2">
          {label}
        </Typography>
      }
      {...props}
      {...field}
      control={<Radio />}
    />
  );
};

export default RadioButton;
