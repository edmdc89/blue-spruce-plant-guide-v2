import { useState } from 'react';

interface IFormFieldProps {
  name?: string;
  email: string;
  password: string;
}

type FormHook = [IFormFieldProps, (e) => void, (field) => void]  

const useFormFields = (initialState: IFormFieldProps): FormHook => {
  const [fields, setValue] = useState(initialState);

  return [
    fields,
    (event) => {
      setValue({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
    (field) => {
      setValue({
        ...fields,
        [field]: '',
      });
    },
  ];
};

export default useFormFields;
