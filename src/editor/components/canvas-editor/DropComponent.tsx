import { Component, defineComponent } from "vue";
import { Node } from "@antv/x6";

export const getDropComponent = (cpt: Component): Component => {
    return defineComponent({
        inject: ["getNode"],
        data() {
            return {
                value: undefined,
                style: undefined
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            node.on("change:data", ({ current }) => {
                if (current.style) {
                    this.style = { ...current.style }
                }
                console.log('DropComponent', current)
                if (current.value) {
                    this.value = current.value ;
                }

                // 修改后的属性和值存入节点的data属性中
                node.setData({
                    style: this.style,
                    value: this.value
                })
            });
        },
        render() {
            return (
                <cpt value={this.value} style={this.style}/>
            )
        }
    })
}