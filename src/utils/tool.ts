
import { ElMessage } from 'element-plus'

const message = {
        success: (msg: string) => {
            ElMessage({
                message: msg,
                type: 'success',
              })
        },
        error: (msg: string) => {

        }
}
/**
 * 解析URL参数
 * @returns 
 */
const parseParams = () => {
    const queryString = window.location.search;
    if (queryString) {
        const queryStringArray = queryString.split("?")[1].split("&");
        let params: any = {}
        queryStringArray.forEach((item) => {
            const [key, value] = item.split("=");
            params[key] = value;
        });
        return params;
    }
    return {};
}

/**
 * 生成随机字符串
 * @param len 
 * @returns 
 */
const randomString = (len?: number) => {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

/**
 * 判断字符串是否是JSON字符串
 * @param str 
 * @returns 返回JSON对象或者false
 */
const isJSON = (str: string) => {
    if (typeof str === 'string') {
        try {
            let obj = JSON.parse(str);
            return obj;
        } catch(e) {
            return false;
        }
    }
}

/**
 * 解析JSON数据
 * @param str 
 * @returns 
 */
const parseJSONData = (str: string) => {
    const jsonObj = isJSON(str);
    if (jsonObj) {
        return jsonObj;
    }
    return {
        style: {},
        data: {}
    };
}

export { message, parseParams, randomString, isJSON, parseJSONData }