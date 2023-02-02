import axios from "axios";

const authUrl = 'http://192.168.178.222:6749/oauth/v2/token';

async function getToken() {
    const header = {
        grant_type: 'password',
        client_id: '6_3u1ei93d8f408w8kocw0w4kckk0cgsc044sckw8ck0gokg4ggg',
        client_secret: '34g496hgdxog4ksog4gg0gsko8ocg0sowgo8g4g4ccggog408o',
        username: 'marianne',
        password: 'nak@dkf!urm!nwj4GTB'
    }
    const response = await axios.post(authUrl, header);
    saveToken(response.data);
}

async function refreshToken() {
    // get refresh token from localStorage
    const tokenData = JSON.parse(localStorage.getItem('oAuthData') as string);
    const refreshToken = tokenData.refresh_token;
    // get new token and save

    const header = {
        grant_type: 'refresh_token',
        client_id: '6_3u1ei93d8f408w8kocw0w4kckk0cgsc044sckw8ck0gokg4ggg',
        client_secret: '34g496hgdxog4ksog4gg0gsko8ocg0sowgo8g4g4ccggog408o',
        refresh_token: refreshToken
    }

    const response = await axios.post(authUrl, header);
    console.log(response)
    return response;
}

function getTokenFromLocalStorage() {
    const tokenData = JSON.parse(localStorage.getItem('oAuthData') as string);
    return tokenData.access_token;
}

function saveToken (token: any) {
    localStorage.setItem('oAuthData', JSON.stringify(token));
}

export {
    getToken,
    refreshToken,
    getTokenFromLocalStorage
}