import { render, screen } from "@testing-library/react";
import Task2 from ".";
import userEvent from "@testing-library/user-event";


describe("Task2 Component", () => {
	test("form validation works correctly", async () => {
		render(<Task2 />);

		// Fill in the form fields
		await userEvent.type(screen.getByPlaceholderText("Name..."), "Olga");
		await userEvent.type(screen.getByPlaceholderText("Email..."), "test@example.com");
		await userEvent.type(screen.getByPlaceholderText("Password..."), "password123");

		const submitButton = screen.getByRole("button", { name: "submitForm" });
		expect(submitButton).toBeEnabled();
	});

});
