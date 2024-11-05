import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { FormInputProps } from '../types';
import { useMemo } from 'react';
import Typography from '../../../TextField';

const getInput = (type: FormInputProps['type']) => {
	switch (type) {
		case "checkbox":
			return styled.input`
				width: 30px;
				height: 30px;
				padding: 10px;
				background-color: transparent;
				border: 1px solid ${({ theme }) => theme.colors.border__base};
				color: inherit;
				font-size: inherit;

				&:disabled {
					cursor: not-allowed;
					opacity: 0.6;
				}
			`;
		case "text":
		default:
			return styled.input`
				width: 100%;
				height: 40px;
				padding: 10px;
				background-color: transparent;
				border: 1px solid ${({ theme }) => theme.colors.border__base};
				color: inherit;
				font-size: inherit;

				&:disabled {
					cursor: not-allowed;
					opacity: 0.6;
				}
			`
	}
}

export default function FormInput({
	id,
	type = 'text',
	validation,
	...rest
}: FormInputProps) {
	const {
		register,
		formState: { errors }
	} = useFormContext();

	const error = useMemo(() => errors[id], [errors[id]])
	const StyledInput = useMemo(() => getInput(type), [type]);
	return (
		<div style={{ flex: 1, flexDirection: "column" }}>
			<StyledInput
				{...rest}
				{...register(id, validation)}
				type={type}
				name={id}
				id={id}
			/>
			{error && <Typography type='error'>{error.message as string}</Typography>}
		</div>
	);
}
