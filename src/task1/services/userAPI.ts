import { useFetch } from "../hooks/useFetch";
import { User } from "@task1/types";

export const fetchMockUsers = () => {
	const result = useFetch<User[]>({
		url: "https://api.github.com/users",
		method: "GET"
	});

	return result;
};
