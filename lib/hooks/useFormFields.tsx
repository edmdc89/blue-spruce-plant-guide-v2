import { useState } from 'react';

interface IFormFieldProps {
  name?: string;
  email: string;
  password: string;
}

const useFormFields = (initialState: IFormFieldProps): [IFormFieldProps, (e: any) => void] => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
};

export default useFormFields;
