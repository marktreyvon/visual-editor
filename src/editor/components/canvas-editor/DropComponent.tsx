import { Component, defineComponent } from "vue";
import { Node } from "@antv/x6";
import { isJSON } from "@/utils"
export const getDropComponent = (cpt: Component): Component => {
    return defineComponent({
        inject: ["getNode"],
        data() {
            return {
                value: undefined,
                style: undefined,
                option: {},
                data: {}
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            console.log('DropComponent.mounted', node)
            // 监听节点的附加数据变化
            node.on("change:data", ({ current }) => {
                // 判断是否为json字符串
                const jsonObj = isJSON(current.jsonData);
                if (!current.jsonData || !jsonObj) return;

                if (jsonObj.style) {
                    this.style = { ...jsonObj.style }
                }
                if (jsonObj.value) {
                    this.value = { ...jsonObj.value } ;
                }
                if (jsonObj.option) {
                    this.option = { ...jsonObj.option }
                }
                if (jsonObj.data) {
                    this.data = { ...jsonObj.data }
                    if (jsonObj.data.bindType === "static") {
                        this.value = jsonObj.data.static;
                    }
                }
                console.log('DropComponent.jsonObj', jsonObj)
            });
        },
        render() {
            return (
                <cpt value={this.value} style={this.style} option={this.option} data={this.data} />
            )
        }
    })
}