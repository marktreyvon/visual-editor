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
                option: undefined
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            node.on("change:data", ({ current }) => {
                console.log('change:data', current.jsonData)
                const jsonObj = isJSON(current.jsonData);
                if (!current.jsonData || !jsonObj) return;
                console.log('change:data', jsonObj)

                if (jsonObj.style) {
                    this.style = { ...jsonObj.style }
                }
                if (jsonObj.value) {
                    this.value = { ...jsonObj.value } ;
                }
                if (jsonObj.option) {
                    this.option = { ...jsonObj.option }
                }
                // 修改后的属性和值存入节点的data属性中
                node.setData({
                    style: this.style,
                    value: this.value,
                    option: this.option
                })
            });
        },
        render() {
            return (
                <cpt value={this.value} style={this.style} option={this.option}/>
            )
        }
    })
}