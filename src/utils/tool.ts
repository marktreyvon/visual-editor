
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


export { message, parseParams, randomString, copyToClipboard }
