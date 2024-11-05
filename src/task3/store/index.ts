import { FieldValues } from "react-hook-form";
import { create } from "zustand";

export interface Step1Data {
	name: string;
	email: string;
	phone: string;
}

export interface Step2Data {
	addressLine: string;
	city: string;
	postalCode: string;
}

export interface Step3Data {
	newsletterSubscription: boolean;
	agreeToTerms: boolean;
}

interface FormStore {
	step1Data: Step1Data;
	step2Data: Step2Data;
	step3Data: Step3Data;
	updateStep1Data: (data: Step1Data) => void;
	updateStep2Data: (data: Step2Data) => void;
	updateStep3Data: (data: Step3Data) => void;
}

const useFormStore = create<FormStore>((set) => ({
	step1Data: { name: "", email: "", phone: "" },
	step2Data: { addressLine: "", city: "", postalCode: "" },
	step3Data: { newsletterSubscription: false, agreeToTerms: false },

	// Update functions for each step's data
	updateStep1Data: (data) => set((state) => ({
		step1Data: { ...state.step1Data, ...data },
	})),
	updateStep2Data: (data) => set((state) => ({
		step2Data: { ...state.step2Data, ...data },
	})),
	updateStep3Data: (data) => set((state) => ({
		step3Data: { ...state.step3Data, ...data },
	})),
}));

export default useFormStore;
