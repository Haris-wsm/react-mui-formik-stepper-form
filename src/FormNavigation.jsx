import { Box } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';

const FormNavigation = (props) => {
  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      {props.hasPrevious && <Button onClick={props.onBackClick}>Back</Button>}
      <Button variant="contained" type="submit">
        {props.isLastStep ? 'Submit' : 'Next'}
      </Button>
    </Box>
  );
};

export default FormNavigation;
