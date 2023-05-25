
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

export { message, parseParams, randomString }