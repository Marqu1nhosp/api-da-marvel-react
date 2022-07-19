import axios from "axios"; 
import md5 from 'md5';


const publicKey = '9b1cdc7709e142e57f3d6d0b2b263f23';
const privateKey = '69e7499c7c38d9eb604bba00db131e887839478b';
const ts = Number (new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
})


export default api;
