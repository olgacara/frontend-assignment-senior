import { FC, useMemo, useState } from "react";
import Form from "./components/Form";
import { css, ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./theme";
import styled from "@emotion/styled";
import Button from "./components/Button";
import FormField from "./components/Form/FormField";

export interface FormFields {
	name: string;
	email: string;
	password: string;
	employed: boolean;
}

const Task2: FC = () => {
	const [mode, setMode] = useState<'light' | 'dark'>('light')
	const theme = useMemo(() => {
		switch (mode) {
			case 'light':
				return lightTheme
			case 'dark':
			default:
				return darkTheme
		}
	}, [mode])
	// Normally it would be a global Global container for the whole page
	const GlobalContainer = useMemo(() => styled.div`
		position: relative;
		background-color: ${({ theme }) => theme.colors.background__base};
		color: ${({ theme }) => theme.colors.text__base};
		font-size: 18px;

		* {
			box-sizing: border-box;
		}

		@media only screen and (max-width: 600px) {  // Phones breakpoint
			font-size: 16px;
		}
	`, [theme]);

	return <ThemeProvider theme={mode == "dark" ? darkTheme : lightTheme}>
		<GlobalContainer>
			<Button
				customCss={css`
				position: absolute;
				top: 2rem;
				right: 2rem;
			`}
				onClick={() => setMode(mode === "light" ? "dark" : "light")}>
				{"Switch mode"}
			</Button>
			<Form
				header="Sign Up"
				initialValues={{
					name: "Olga",
					email: "test@example.com",
					password: "password123",
					employed: false,
				}}
				onSubmit={(data) => console.log("submitted", data)}>
				<FormField
					id="name"
					label="Name"
					variant="input"
					type="text"
					placeholder="Name..."
					validation={{ required: { value: true, message: "Name required" } }} />
				<FormField
					id="email"
					label="Email"
					variant="input"
					type="email"
					placeholder="Email..."
					validation={{ required: { value: true, message: "Email required" } }} />
				<FormField
					id="password"
					label="Password"
					variant="input"
					type="password"
					placeholder="Password..."
					validation={{
						required: { value: true, message: "Password required" },
						minLength: { value: 6, message: "Minimum 6 characters" }
					}} />
				<FormField
					id="employed"
					label="Currently employed"
					variant="input"
					type="checkbox" />
			</Form>
		</GlobalContainer>
	</ThemeProvider>
};

export default Task2;
