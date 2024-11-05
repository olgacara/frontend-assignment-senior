
import { RegisterOptions } from 'react-hook-form';

export type FormInputProps = {
	id: string;
	validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

type FormFieldInputProps = {
	variant: 'input';
} & FormInputProps;


export type FormFields = FormFieldInputProps
