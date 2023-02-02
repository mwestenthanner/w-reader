import axios from "axios";
import { getToken, getTokenFromLocalStorage, refreshToken } from "./auth";

const apiUrl = 'http://192.168.178.222:6749/api/'

async function getTags() {
    const config = {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
    };

    try {
        const res = await axios.get(apiUrl + 'tags', config);
        return res;
    } catch (err) {
        await refresh()
        const res = await axios.get(apiUrl + 'tags', config);
        return res.data;
    }
}

async function getEntries() {
    const config = {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
    };

    try {
        const res = await axios.get(apiUrl + 'entries', config);
        return res;
    } catch (err) {
        await refresh()
        const res = await axios.get(apiUrl + 'entries', config);
        return res.data;
    }
}

async function refresh() {
    try {
        await refreshToken()
    } catch (err) {
        await getToken()
    }
}

export {
    getTags,
    getEntries
}