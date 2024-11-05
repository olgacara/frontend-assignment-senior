import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			background__base: string;
			text__base: string;
			border__base: string;
			buttons: {
				background__button__base: string;
				background__button__hover: string;
				border__button__base: string;
				color__button: string;

				background__submit__base: string;
				background__submit__hover: string;
				border__submit__base: string;
				color__submit: string;
			}
		};
	}
}
