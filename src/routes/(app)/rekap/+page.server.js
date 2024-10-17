import { getYearMonth } from '../../../lib/js/date'
import { API_ENDPOINT } from '$env/static/private';


export const load = async (params) => {

    const tahunBulan =
        params.url.searchParams.get('bulan') === null
            ? getYearMonth()
            : params.url.searchParams.get('bulan');

    const res = await fetch(`${API_ENDPOINT}/rekap/${tahunBulan}`);
    const data = await res.json();

    return {
        data: data
    };
};