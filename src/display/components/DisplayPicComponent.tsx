import { isJSON } from "@/utils";
import { Component, defineComponent } from "vue";
export const getDisplayPicComponent = (data: any): Component => {
    return defineComponent({
        data() {
            return {
                style: {
                    backgroundColor: undefined,
                    width: '100%',
                    height: '100%',
                }
            }
        },
        mounted() {
            console.log('getDisplayPicComponent', data)
            const jsonData = isJSON(data.jsonData);
            if (!jsonData) return;
            if (jsonData.style) {
                this.style = { ...jsonData.style, width: '100%', height: '100%' }
            }
        },
        render() {
            return (
                <div style={this.style}>
                    <el-image style="width: 100%; height: 100%" src={data.pic}/>
                </div>
            )
        }
    })
}