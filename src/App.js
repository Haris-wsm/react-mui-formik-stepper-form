import './App.css';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';

import * as yup from 'yup';
import Field from './components/Field';
import MultiStepForm from './MultiStepForm';
import Stepper from './Stepper';
import RadioButtonCustom from './components/Input/RadioButtonCustom';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import { ErrorMessage } from 'formik';
import Label from './components/Label';

// const companyType = [
//   { label: 'Company', value: '' },
//   {
//     label: 'LLC / Partnership / SIngle-member',
//     value: 'llc'
//   },
//   {
//     label: 'C / S Corporation',
//     value: 'C/S'
//   }
// ];

const employeeNum = [
  { Icon: PersonIcon, text: '1-20' },
  { Icon: PeopleIcon, text: '21-49' },
  { Icon: GroupsIcon, text: '50+' }
];

function App() {
  return (
    <div className="app-container">
      <Box width="50%">
        <MultiStepForm
          initailValues={{
            name: '',
            email: '',
            address: '',
            phone: '',
            type: '',
            total: ''
          }}
          onSubmit={(val) => console.log(val)}
          title="About Your Business"
        >
          <Stepper
            label="User Info"
            validationShcema={yup.object({
              name: yup.string().required('Name is required'),
              email: yup
                .string()
                .email('Email is invalid')
                .required('Email is required'),
              type: yup.string().required('Type is required')
            })}
            onSubmit={() => console.log('Submiting form 1')}
          >
            <Field control="input" name="name" label="Name" />
            <Field control="input" name="email" label="Email" />

            <Box display="flex" flexDirection="column" my={3}>
              <Label
                primaryText="Company type"
                secondaryText="Helpful description"
              />
              <Field
                control="radio"
                name="type"
                label="LLC / Partnership / SIngle-member"
                value="llc"
                type="radio"
              />
              <Field
                control="radio"
                name="type"
                label="C / S Corporation"
                value="C/S"
                type="radio"
              />
              <Field
                control="radio"
                name="type"
                label="B Corporation"
                value="B Corporation"
                type="radio"
              />
            </Box>
          </Stepper>
          <Stepper
            label="Address"
            validationShcema={yup.object({
              address: yup.string().required('Address is required'),
              phone: yup.string().required('Phone is required'),
              total: yup.string().required('Total is required')
            })}
            onSubmit={() => console.log('Submiting form 1')}
          >
            <Box>
              <Label
                primaryText="Number of employees"
                secondaryText="Helpful description"
              />
              <Box display="flex" gap={3} my={3}>
                {employeeNum?.map(({ Icon, text }) => (
                  <RadioButtonCustom
                    name="total"
                    Icon={Icon}
                    text={text}
                    value={text}
                    key={text}
                  />
                ))}
                <Box>
                  <ErrorMessage name="total" />
                </Box>
              </Box>
            </Box>
            <Field control="input" name="address" label="Address" />
            <Field control="input" name="phone" label="Phone" />
          </Stepper>
        </MultiStepForm>
      </Box>
    </div>
  );
}

export default App;
