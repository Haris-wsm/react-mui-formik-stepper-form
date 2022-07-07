import { Box, TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box width="100%" my={2}>
      <TextField
        label={label}
        {...field}
        {...props}
        fullWidth
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </Box>
  );
};

export default Input;
