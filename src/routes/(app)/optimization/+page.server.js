import { API_ENDPOINT } from '$env/static/private';
import { getToday } from '../../../lib/js/date';

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/optimization/${getToday()}`);
	const data = await res.json();

	return {
		data1: data.data.irr1,
		data2: data.data.irr2,
		data3: data.data.irr3,
		data4: data.data.avg,
		data5: data.data.max
	};
};
