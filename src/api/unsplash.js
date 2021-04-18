import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID rPBYEm_uBK80KgPvyTX4zkY_NH6QbwXBTl5dVz3Rspw',
  },
});
