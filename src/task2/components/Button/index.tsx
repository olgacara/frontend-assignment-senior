import { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { SerializedStyles, Theme } from '@emotion/react';

type SubmitButtonProps = {
	children: string | ReactElement;
	customCss?: SerializedStyles;
} & React.ComponentPropsWithoutRef<'button'>;

const getButtonStyles = (theme: Theme, type: SubmitButtonProps['type'] = 'button') => {
	if (type === "reset") {
		type = "button"
	}

	return {
		backgroundColor: theme.colors.buttons[`background__${type}__base`],
		backgroundColorHover: theme.colors.buttons[`background__${type}__hover`],
		borderColor: theme.colors.buttons[`border__${type}__base`],
		textColor: theme.colors.buttons[`color__${type}`]
	};
};

const StyledButton = styled.button<Omit<SubmitButtonProps, "children">>`
	width: fit-content;
	background-color: ${({ theme, type = 'button' }) => getButtonStyles(theme, type).backgroundColor};
	padding: 10px 20px;
	border: 1px solid ${({ theme, type = 'button' }) => getButtonStyles(theme, type).borderColor};
	color: ${({ theme, type }) => getButtonStyles(theme, type).textColor};
	border-radius: 4px;
	cursor: pointer;
	transition: opacity 0.3s;

	${({ customCss }) => customCss}

	&:disabled {
		cursor:not-allowed;
		opacity: 0.6;
	}

	&:hover {
		background-color: ${({ theme, type = 'button' }) => getButtonStyles(theme, type).backgroundColorHover};
  		opacity:0.6;
	}
`;

const Button: FC<SubmitButtonProps> = ({ children, ...rest }) => {

	return (
		<StyledButton {...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;
