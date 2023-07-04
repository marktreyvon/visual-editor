import { defineStore } from 'pinia'

const MARKET_TOKEN_KEY = "marketToken";
export const useMarketStore = defineStore('marketStore', () => {


    const saveToken = (token: string) => {
        window.localStorage.setItem(MARKET_TOKEN_KEY, token);
    }

    const getToken = () => {
        return  window.localStorage.getItem(MARKET_TOKEN_KEY) || "";
    }

    return { saveToken, getToken }
})