
import { ElMessage } from 'element-plus'

const message = {
        success: (msg: string) => {
            ElMessage({
                message: msg,
                type: 'success',
              })
        },
        error: (msg: string) => {
            ElMessage({
                message: msg,
                type: 'error',
              })
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
 * 判断对象是否是数组
 * @param obj 
 * @returns 
 */
const isArray = (obj: any) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
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

/**
 * 读取文件
 * @param raw 
 */
const readFile = (raw: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // onload 事件处理程序，在 FileReader 对象读取文件内容后触发      
        reader.onload = (event: any) => {      
            const result = event.target.result;
            const data = decodeURIComponent(escape(result));
            resolve(data);
        };
        // 读取文件内容      
        reader.readAsBinaryString(raw)
    })
    
}

const exportFile = (fileName: string, content: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', fileName);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click(); 
    document.body.removeChild(element);
}


export { message, parseParams, randomString, isJSON, parseJSONData, readFile, exportFile, isArray }