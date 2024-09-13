import { API_ENDPOINT } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('irradiance', data.get('irradiance'));

		const res = await fetch(`${API_ENDPOINT}/uploadirradiance`, {
			method: 'POST',
			body: formData,
			timeout: 600000
		});

		return res.json();
	}
};


export const load = async () => {
	const [res1, res2] = await Promise.all([
		fetch(`${API_ENDPOINT}/getlast4days`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/lastirradiance`).then((res) => res.json())
	])

	return {
		data1: res1,
		data2: res2
	};
};
