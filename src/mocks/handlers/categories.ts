import { delay } from 'msw';
import { HttpResponse, http } from 'msw/http';
import { API_BASE_PATH } from '../../common/api/config';
import { MOCKED_CATEGORIES } from '../data/categories';

export const categoryHandlers = [
	http.get(`${API_BASE_PATH}/categories`, async () => {
		await delay('real');
		return HttpResponse.json(MOCKED_CATEGORIES);
	}),
];
