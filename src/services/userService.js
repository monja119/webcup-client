import axios from 'axios';
const back_en_point = import.meta.env.VITE_API_URL;

export const listUsers = () => {
    const stringToken = localStorage.getItem('webcup_token')
    const token = JSON.parse(stringToken).token
    return axios.get(`${back_en_point}/${token}/listUsers`)
}
