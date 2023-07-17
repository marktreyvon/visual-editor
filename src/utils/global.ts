
/**
 * @author: cxs
 * @date: 2023/6/7
 * @description: 全局方法
 */
const install = () => {

    /**
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 例：
     * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
     */
    Date.prototype.format = function (fmt: any) {  
        var o = {
            "M+": this.getMonth() + 1,  // 月份 
            "d+": this.getDate(),  // 日 
            "H+": this.getHours(),  // 小时 
            "m+": this.getMinutes(),  // 分 
            "s+": this.getSeconds(),  // 秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度 
            "S": this.getMilliseconds()  // 毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            const key = k as keyof typeof o;
            const ele: any = <any>(o[key])
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (ele) : (("00" + ele).substr(("" + ele).length)));
            }
        }

        return fmt;
    }

}


export { install }