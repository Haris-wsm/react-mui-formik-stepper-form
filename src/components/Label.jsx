import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Label = ({ primaryText, secondaryText }) => {
  return (
    <Box my={2} px={2}>
      <Typography color="text.secondary" variant="body1">
        {primaryText}
      </Typography>
      <Typography color="text.disabled" variant="body2">
        {secondaryText}
      </Typography>
    </Box>
  );
};

export default Label;
