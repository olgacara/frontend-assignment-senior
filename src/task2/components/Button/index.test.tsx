import { describe } from "vitest";
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import Button from ".";
import { darkTheme } from '../../theme';

describe("Button Component", () => {
	// Add 1 or 2 positive and 1 or 2 negative tests
	test('renders button with correct styles based on type prop', () => {
		const { getByRole } = render(
			<ThemeProvider theme={darkTheme}>
				<Button type="submit">Submit</Button>
			</ThemeProvider>
		);

		const button = getByRole('button');
		expect(button).toHaveStyle(`background-color: ${darkTheme.colors.buttons.background__submit__base}`);
		expect(button).toHaveStyle(`color: ${darkTheme.colors.buttons.color__submit}`);
	});

	test('button is disabled and has correct styles when disabled prop is set', () => {
		const { getByRole } = render(
			<ThemeProvider theme={darkTheme}>
				<Button disabled>Submit</Button>
			</ThemeProvider>
		);

		const button = getByRole('button');
		expect(button).toBeDisabled();
		expect(button).toHaveStyle(`cursor: not-allowed`);
	});
});
