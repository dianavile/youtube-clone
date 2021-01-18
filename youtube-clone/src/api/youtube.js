import axios from 'axios';

// const KEY = 'API_KEY_FROM_GOOGLE_CONSOLE';

// export const baseParams = {
//   part: "snippet",
//   maxResults: 5,
//   key: KEY
// };

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});








