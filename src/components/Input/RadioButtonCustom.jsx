import { Box, styled, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

const Card = styled(Box)(({ theme }) => ({
  height: 150,
  width: 200,
  position: 'relative',
  //   border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}));

const RadioInput = styled('input')(({ theme }) => ({
  appearance: 'none',
  height: '100%',
  width: '100%',
  borderRadius: 10,
  position: 'absolute',
  outline: 'none',
  cursor: 'pointer',
  zIndex: 1,
  '&:checked': {
    border: '1px solid #EAF6F6',
    // color: theme.palette.primary,
    background: '#EAF6F6'
  },
  '&:checked + .content > *': {
    color: theme.palette.primary.main
  }
}));

const CardDetail = styled('label')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

const RadioButtonCustom = ({ Icon, text, ...props }) => {
  const [field] = useField(props);

  return (
    <Card className="card">
      <RadioInput type="radio" id={text} {...field} {...props} />
      <Box className="content" sx={{ zIndex: 100 }}>
        <CardDetail htmlFor={text}>
          <Icon sx={{ fontSize: 50 }} />
          <Typography variant="h6" component="h2" className="card-detail">
            {text}
          </Typography>
        </CardDetail>
      </Box>
    </Card>
  );
};

export default RadioButtonCustom;
