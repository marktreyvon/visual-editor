import { Component, defineComponent } from "vue";
import { Node } from "@antv/x6";

export const getDropComponent = (cpt: Component): Component => {
    return defineComponent({
        inject: ["getNode"],
        data() {
            return {
                value: {},
                style: {}
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            node.on("change:data", ({ current }) => {
                if (current.style) {
                    this.style = { ...current.style }
                }
                if (current.value) {
                    this.value = { ...current.value };
                }
            });
        },
        render() {
            return (
                <cpt value={this.value} style={this.style}/>
            )
        }
    })
}