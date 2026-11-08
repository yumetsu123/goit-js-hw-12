import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58349884-cb67c3693c894603089b85818';

export const getImagesByQuery = async (query, page) => {
    const res = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15,
        }
    })
    const data = await res.data;
    return data;
}
