import { Component, defineComponent } from "vue";
import { Node } from "@antv/x6";
import { isJSON } from "@/utils"
export const getDropPicComponent = (url: String): Component => {
    return defineComponent({
        inject: ["getNode"],
        data() {
            return {
                value: undefined,
                style: {
                    width: '100%',
                    height: '100%',
                    backgroundColor: undefined,
                    fit: 'contain'
                },
                option: {},
                data: {}
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            node.setData({
                pic: url
            })
            console.log("getDropPicComponent.node", node)
            // 监听节点的附加数据变化
            node.on("change:data", ({ current }) => {
                // 判断是否为json字符串
                const jsonObj = isJSON(current.jsonData);
                // if (!current.jsonData || !jsonObj) return;

                if (jsonObj.style) {
                    this.style = { ...jsonObj.style, width: '100%', height: '100%' }
                }
                console.log("getDropPicComponent.this.style", this.style)
            });
        },
        render() {
            return (
                <div style={this.style}>
                    <el-image style="width: 100%; height: 100%" src={url} fit={this.style.fit}/>
                </div>
            )
        }
    })
}