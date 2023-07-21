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
                data: {},
                id: ""
            }
        },
        mounted() {
            const node: Node = (this as any).getNode() as Node;
            console.log('DropComponent.mounted.node', node)
            this.id = node.id;
            this.setData(node.getData());
            // 监听节点的附加数据变化
            node.on("change:data", ({ current }) => {
                this.setData(current);
            });
            node.on('wheel', (e:any) => {
                e.stopPropagation()
                console.log(e,"432434324324324")
            });

        },
        methods: {
            setData(data: any) {
                console.log("DropComponent.setData.data", data)
                if (!data) return;
                // 判断是否为json字符串
                const jsonObj = isJSON(data.jsonData);
                if (!data?.jsonData || !jsonObj) return;

                if (jsonObj?.style) {
                    this.style = { ...jsonObj?.style }
                }
                if (jsonObj?.value) {
                    this.value = { ...jsonObj?.value } ;
                }
                if (jsonObj?.option) {
                    this.option = { ...jsonObj?.option }
                }
                if (jsonObj?.data) {
                    this.data = { ...jsonObj.data }
                    if (jsonObj.data.bindType === "static") {
                        this.value = jsonObj.data.static;
                    }
                }
            },
            onChange(data: any) {
                const node: Node = (this as any).getNode() as Node;
                let jsonStr = "{}";
                if (node?.getData()) {
                    // 从节点的附加数据中获取JSON字符串
                    jsonStr = node.getData()?.jsonData || "{}";
                }
                const jsonObj = isJSON(jsonStr);
                if (data?.style) {
                    jsonObj.style = { ...data.style };
                }
                if (data?.data) {
                    jsonObj.data = { ...data.data };
                }
                // 因为antv-x6的setData暂不支持Array，所以这里只能用JSON字符串来存储数据
                const jsonData = JSON.stringify(jsonObj);
                node.setData({
                    jsonData
                })
            }
        },
        render() {
            return (
                <cpt id={this.id} value={this.value} style={this.style} option={this.option} data={this.data} onOnChange={(value: any) => this.onChange(value)}/>
            )
        }
    })
}