import { API_ENDPOINT } from '$env/static/private';

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/settingparameter`);
	const data4 = await res.json();

	return {
		data4
	};
}

