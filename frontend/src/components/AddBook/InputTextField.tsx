import { FunctionComponent } from 'react';

import TextField from '@mui/material/TextField';
interface InputTextFieldProps {
    label: string;
}

const InputTextField: FunctionComponent<InputTextFieldProps> = () => {
    return <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />;
};

export default InputTextField;
