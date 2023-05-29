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
        let expires_in = Date.now() + Number(tokenInfo.expiresTime) * 1000;
        window.localStorage.setItem(TOKEN_EXPIRES_TIME_KEY, expires_in.toString());
    }

    const destroyToken = (): void => {
        setTokenInfo({ token: "", expiresTime: "" });
    }

    return {
        getTokenInfo, setTokenInfo, destroyToken
    }
})
export interface ITokenInfo {

    /**
     * 令牌
     */
    token: string;

    /**
     * 过期时间
     */
    expiresTime: string;
}



