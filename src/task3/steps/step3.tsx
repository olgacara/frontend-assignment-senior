import Form from "../../task2/components/Form";
import FormField from "../../task2/components/Form/FormField";
import useFormStore, { Step3Data } from "../store";

interface Step1Props {
	goToNextStep: () => void;
}

function Step3({ goToNextStep }: Step1Props) {
	const { step3Data, updateStep3Data } = useFormStore();

	return <Form
		header="Step3"
		initialValues={step3Data}
		onSubmit={(data) => {
			updateStep3Data(data);
			goToNextStep()
		}}>
		<FormField
			id="newsletterSubscription"
			label="Subscribe to newsletter"
			variant="input"
			type="checkbox" />
		<FormField
			id="agreeToTerms"
			label="Agree to terms"
			variant="input"
			type="checkbox"
			validation={{ required: { value: true, message: "Agree to terms required" } }} />
	</Form>
};

export default Step3;
