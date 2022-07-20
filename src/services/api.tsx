import axios from "axios"; 
import md5 from 'md5';


const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c';
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316';
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
