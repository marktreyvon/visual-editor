import { defineStore } from 'pinia'

const TOKEN_KEY = "token";
const TOKEN_EXPIRES_TIME_KEY = "tokenExpiresTime";

export const useAuthStore = defineStore('authStore', () => {
    
    const getTokenInfo = (): ITokenInfo => {
        const token = window.localStorage.getItem(TOKEN_KEY) || "";
        const expiresTime = window.localStorage.getItem(TOKEN_EXPIRES_TIME_KEY) || "";
        return { token, expiresTime};
    }

    const setTokenInfo = (tokenInfo: ITokenInfo): void => {
        window.localStorage.setItem(TOKEN_KEY, tokenInfo.token);
        window.localStorage.setItem(TOKEN_EXPIRES_TIME_KEY, tokenInfo.expiresTime);
    }

    return {
        getTokenInfo, setTokenInfo
    }
})

interface ITokenInfo {
    token: string;
    expiresTime: string;
}