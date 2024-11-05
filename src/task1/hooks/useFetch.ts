import { useEffect, useReducer } from 'react';

interface RequestOptions {
	url: string;
	method?: string;
	headers?: Record<string, string>;
	body?: unknown;
}

interface FetchState<T = null> {
	isLoading: boolean;
	data: T | null;
	error: string | null;
}

type FetchActions<T> =
	{ type: "loading" } |
	{ type: "success", data: T } |
	{ type: "error", error: string }



export const useFetch = <T>({ url, method = "GET", body, headers = {} }: RequestOptions): FetchState<T> => {
	const [state, dispatch] = useReducer(reducerActions, {
		data: null,
		isLoading: false,
		error: null,
	});

	function reducerActions(state: FetchState<T>, action: FetchActions<T>) {
		switch (action.type) {
			case "loading":
				return { ...state, isLoading: true };
			case "success":
				return { data: action.data, isLoading: false, error: null };
			case "error":
				return { data: null, isLoading: false, error: action.error };
			default:
				throw new Error("Unknown action type");
		}
	}

	useEffect(() => {
		let shouldCancel = false;

		const callFetch = async () => {
			dispatch({ type: "loading" });

			try {
				const response = await fetch(url, {
					method: method,
					headers: {
						'Content-Type': 'application/json',
						...headers
					},
					body: JSON.stringify(body),
				});
				if (shouldCancel) return;
				if (!response.ok) {
					// API call failed
					const error = getErrorMessage(response.status)
					dispatch({ type: "error", error });
				} else {
					const data: T = await response.json()
					dispatch({ type: "success", data: data });
				}
			} catch (e: unknown) {
				// Handle error
				if (e instanceof Error) {
					const error = e.message
					dispatch({ type: "error", error });
				}
			}
		};

		callFetch();
		return () => {
			shouldCancel = true
		};
	}, [url, method, body]);

	return state;
}

const getErrorMessage = (statusCode: number) => {
	switch (statusCode) {
		case 400:
			return "Bad Request: The request could not be understood or was missing required parameters.";
		case 401:
			return "Unauthorized: Authentication failed or user doesn't have permissions for this resource.";
		case 403:
			return "Forbidden: The request is understood, but it has been refused or access is not allowed.";
		case 404:
			return "Not Found: The resource could not be found.";
		case 500:
			return "Internal Server Error: An error occurred on the server.";
		case 502:
			return "Bad Gateway: Invalid response from an upstream server.";
		case 503:
			return "Service Unavailable: The server is currently unable to handle the request.";
		case 504:
			return "Gateway Timeout: The server did not receive a timely response from an upstream server.";
		default:
			return `Unknown Error: Received unexpected status code ${statusCode}.`;
	}
}
