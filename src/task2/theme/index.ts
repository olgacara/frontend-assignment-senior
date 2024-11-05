import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
	colors: {
		background__base: "#ffffff",
		text__base: "#000000",
		border__base: "#bbb5ae",
		buttons: {
			background__button__base: "#777",
			background__button__hover: "#999",
			border__button__base: "#f7f5f2",
			color__button: "#fff",

			background__submit__base: "#86b111",
			background__submit__hover: "#86b111",
			border__submit__base: "transparent",
			color__submit: "#fff",
		}
	}
};

export const darkTheme: Theme = {
	colors: {
		background__base: "#1a1918",
		text__base: "#fff",
		border__base: "#5b5650",
		buttons: {
			background__button__base: "#1a1918",
			background__button__hover: "#121211",
			border__button__base: "#ffffff24",
			color__button: "#fff",

			background__submit__base: "#86b111",
			background__submit__hover: "#86b111",
			border__submit__base: "#121211",
			color__submit: "#fff"
		}
	}
};
