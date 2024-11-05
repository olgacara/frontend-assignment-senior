import Form from "../../task2/components/Form";
import FormField from "../../task2/components/Form/FormField";
import useFormStore, { Step2Data } from "../store";

interface Step2Props {
	goToNextStep: () => void;
}

function Step2({ goToNextStep }: Step2Props) {
	const { step2Data, updateStep2Data } = useFormStore();

	return <Form
		header="Step2"
		initialValues={step2Data}
		onSubmit={(data) => {
			updateStep2Data(data);
			goToNextStep()
		}}>
		<FormField
			id="addressLine"
			label="Address"
			variant="input"
			type="text"
			placeholder="Address..."
			validation={{ required: { value: true, message: "Address required" } }} />
		<FormField
			id="city"
			label="City"
			variant="input"
			type="text"
			placeholder="City..."
			validation={{ required: { value: true, message: "City required" } }} />
		<FormField
			id="postalCode"
			label="Postal code"
			variant="input"
			type="text"
			placeholder="Postal code..."
			validation={{ required: { value: true, message: "Postal code required" } }} />
	</Form>
};

export default Step2;
