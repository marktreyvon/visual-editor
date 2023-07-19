import { defineStore } from 'pinia'
import { MarketApi } from "@/api/market"

export const useMarketStore = defineStore('marketStore', () => {
    const MARKET_TOKEN_KEY = "marketToken";
    let _token: string = "";
    let isLogined: boolean = false;

    const setToken = (token: string) => {
        _token = token;
        window.localStorage.setItem(MARKET_TOKEN_KEY, _token);
    }

    const getToken = () => {
        if (!_token) {
            _token = window.localStorage.getItem(MARKET_TOKEN_KEY) || "";
        }
        return _token;
    }

    /**
     * 登录状态
     */
    const loginStatus = async () => {
        let res = await MarketApi.getSecret();
        console.log('market loginStatus', res)
        if (res && res.status === 200) {
            isLogined = true
        } else {
            isLogined = false;
        }
        return isLogined;
    }

    return { setToken, getToken, loginStatus }
})