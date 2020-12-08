import { useState } from 'react';

interface IFormFieldProps {
  name?: string;
  email: string;
  password: string;
}

type FormHook = [IFormFieldProps, (e) => void, (field: string) => void];

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
    () => {
      setValue(initialState);
    },
  ];
};

export default useFormFields;
