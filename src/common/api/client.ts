import { API_BASE_PATH } from './config';

export const fetchJson = async <T>(path: string): Promise<T> => {
	const response = await fetch(`${API_BASE_PATH}${path}`);
	if (!response.ok) {
		throw new Error(`Request failed: ${response.status} ${path}`);
	}

	return response.json() as Promise<T>;
};
