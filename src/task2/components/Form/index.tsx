import React, { useMemo } from "react";
import { useForm, SubmitHandler, FormProvider, FieldValues, DefaultValues } from "react-hook-form";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Typography from "../TextField";
import Button from "../Button";

interface FormProps<T extends FieldValues> {
	header?: string;
	children: JSX.Element | ("" | JSX.Element | undefined | null)[];
	initialValues?: DefaultValues<T>;
	onSubmit: SubmitHandler<T>;
}

function Form<T extends FieldValues>({ header, initialValues, children, onSubmit }: FormProps<T>) {
	const theme = useTheme();
	const methods = useForm<T>({
		mode: "onTouched",
		defaultValues: initialValues,
		reValidateMode: "onBlur"
	});
	const { handleSubmit, formState: { isValid, isValidating } } = methods;

	const FormContainer = useMemo(() => styled.form`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		background-color: ${({ theme }) => theme.colors.background__base};
		color: ${({ theme }) => theme.colors.text__base};
	`, [theme]);

	const memoizedChildren = useMemo(() => children, [children]);

	return (
		<FormProvider {...methods}>
			<FormContainer theme={theme} onSubmit={handleSubmit(onSubmit)}>
				{header && <Typography aria-label={`Form header: ${header}`} variant="h1">
					{header}
				</Typography>}
				{memoizedChildren}
				<Button aria-label="submitForm" type='submit' disabled={isValidating || !isValid}>Submit</Button>
			</FormContainer>
		</FormProvider>
	);
};

export default Form;
