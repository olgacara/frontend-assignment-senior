import { ThemeProvider } from "@emotion/react";
import { FC, useCallback, useMemo, useState } from "react";
import { lightTheme as theme } from "../task2/theme";
import styled from "@emotion/styled";
import { Step1, Step2, Step3 } from "./steps";
import useFormStore from "./store";

const Task3: FC = () => {
	const [step, setStep] = useState(1);
	const { step1Data, step2Data, step3Data } = useFormStore();

	const goToNextStep = useCallback(() => {
		setStep((prev) => prev + 1);
	}, [step, step1Data, step2Data, step3Data])

	const onSubmit = () => {
		const { step1Data, step2Data, step3Data } = useFormStore.getState();
		console.log("Submitted Data:", step1Data, step2Data, step3Data);
	}

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

	return <ThemeProvider theme={theme}>
		<GlobalContainer>
			{step === 1 && <Step1 goToNextStep={goToNextStep} />}
			{step === 2 && <Step2 goToNextStep={goToNextStep} />}
			{step === 3 && <Step3 goToNextStep={onSubmit} />}
		</GlobalContainer>
	</ThemeProvider>
};

export default Task3;
