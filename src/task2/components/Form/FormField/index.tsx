import Typography from "../../TextField";
import styled from "@emotion/styled";
import FormInput from "./FormInput";
import { FormFields } from "./types";
import { useMemo } from "react";
import { RegisterOptions } from "react-hook-form";

type FormFieldProps = {
	variant: 'input';
	label: string;
	validation?: RegisterOptions;
} & FormFields;

const getField = (type: FormFieldProps['variant'], options: Omit<FormFieldProps, 'variant' | 'label'>) => {
	switch (type) {
		case "input":
		default:
			return <FormInput aria-describedby={`label-${options.id}`} {...options} />
	}
}

function FormField({
	variant,
	label,
	...rest
}: FormFieldProps) {
	const FormFieldContainer = styled.div`
		display: flex;
		flex-direction: row;
		gap: 10px;

		@media only screen and (max-width: 600px) { // Phones breakpoint
			flex-direction: column;
		}
	`

	const LabelContainer = styled.div`
		min-width: 25%;
		width: 25%;
		display: flex;
		justify-content: start;
		align-items: center;
		word-break: break-all;
		white-space: normal;
		overflow: hidden;

		@media only screen and (max-width: 600px) { // Phones breakpoint
			width: 100%;
		}
	`

	const Field = useMemo(() => getField(variant, rest), [variant, rest]);
	return (
		<FormFieldContainer>
			<LabelContainer>
				<Typography id={`label-${rest.id}`}>
					{label}
				</Typography>
			</LabelContainer>

			{Field}
		</FormFieldContainer>
	);
}
export default FormField;
