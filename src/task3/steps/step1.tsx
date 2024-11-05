import Form from "../../task2/components/Form";
import FormField from "../../task2/components/Form/FormField";
import useFormStore, { Step1Data } from "../store";

interface Step1Props {
	goToNextStep: () => void;
}

function Step1({ goToNextStep }: Step1Props) {
	const { step1Data, updateStep1Data } = useFormStore();


	return <Form
		header="Step1"
		initialValues={step1Data}
		onSubmit={(data) => {
			updateStep1Data(data);
			goToNextStep()
		}}>
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
			id="phone"
			label="Phone"
			variant="input"
			type="text"
			placeholder="Phone..."
			validation={{ required: { value: true, message: "Phone required" } }} />
	</Form>
};

export default Step1;
