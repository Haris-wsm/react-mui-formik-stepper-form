import { Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import FormNavigation from './FormNavigation';

const MultiStepForm = ({ initailValues, onSubmit, children, title }) => {
  const [stepNumber, setStepNumber] = useState(0);

  const steps = React.Children.toArray(children);

  const step = steps[stepNumber];
  const totalSteps = steps.length;

  const [snapshot, setSnapshot] = useState(initailValues);

  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    console.log(values);

    setSnapshot(values);
    setStepNumber((prev) => prev + 1);
  };
  const previous = (values) => {
    setSnapshot(values);
    setStepNumber((prev) => prev - 1);
  };

  const handleSubmit = async (values, actions) => {
    console.log(values);
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={step.props.validationShcema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Typography variant="h5">{title}</Typography>
          {step}

          <FormNavigation
            hasPrevious={stepNumber > 0}
            onBackClick={() => previous((p) => p - 1)}
            isLastStep={isLastStep}
          />
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
