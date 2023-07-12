
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

const ColorToHex = (color: any) => {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

/**
 * rgb转hex
 * @param rgba
 * @returns
 */
const rgbtoHex = (rgba: String) => {
    const color = rgba.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    const red = color ? parseInt(color[1]) : 0;
    const green = color ? parseInt(color[2]) : 0;
    const blue = color ? parseInt(color[3]) : 0;
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }


async function copyToClipboard(text: string) {
    try {
        return navigator.clipboard.writeText(text)
    } catch {
        const element = document.createElement('textarea')
        const previouslyFocusedElement = document.activeElement

        element.value = text

        // Prevent keyboard from showing on mobile
        element.setAttribute('readonly', '')

        element.style.contain = 'strict'
        element.style.position = 'absolute'
        element.style.left = '-9999px'
        element.style.fontSize = '12pt' // Prevent zooming on iOS

        const selection = document.getSelection()
        const originalRange = selection
          ? selection.rangeCount > 0 && selection.getRangeAt(0)
          : null

        document.body.appendChild(element)
        element.select()

        // Explicit selection workaround for iOS
        element.selectionStart = 0
        element.selectionEnd = text.length

        document.execCommand('copy')
        document.body.removeChild(element)

        if (originalRange) {
            selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
            selection!.addRange(originalRange)
        }

        // Get the focus back on the previously focused element, if any
        if (previouslyFocusedElement) {
            ;(previouslyFocusedElement as HTMLElement).focus()
        }
    }
}

export { message, parseParams, randomString, isJSON, parseJSONData, readFile, exportFile, isArray, rgbtoHex, copyToClipboard }

