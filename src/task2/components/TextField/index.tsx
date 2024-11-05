import React, { useMemo } from "react";
import styled from "@emotion/styled";

type TypographyProps = {
	type?: "info" | "error";
	variant?: 'h1' | 'regular';
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'span'>

const getTextComponent = (variant: TypographyProps['variant'], type: TypographyProps['type']) => {
	const color = type === "error" ? "color: red;" : "";
	switch (variant) {
		case "h1":
			return styled.h1`
				font-size: 22px;
				${color}
				@media only screen and (max-width: 600px) {
					font-size: 20px;
				}
			`;
		case "regular":
		default:
			return styled.span`${color}`; // Use default global regular text styling
	}
}

const Typography = React.memo(
	({ children,
		type = "info",
		variant = "regular",
		...rest }: TypographyProps) => {
		const TextComponent = useMemo(() => {
			return getTextComponent(variant, type)
		}, [variant, type])

		return <TextComponent {...rest}>
			{children}
		</TextComponent>
	}
);

export default Typography;
