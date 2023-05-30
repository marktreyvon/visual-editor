import { Component, defineComponent } from "vue";

export const getDisplayComponent = (cpt: Component, data: any): Component => {
    return defineComponent({
        data() {
            return {
                value: undefined,
                style: undefined,
                option: undefined
            }
        },
        mounted() {
            console.log('getDisplayComponent', data)
            if (!data) return;
            if (data.style) {
                this.style = { ...data.style }
            }
            if (data.value) {
                this.value = { ...data.value } ;
            }
            if (data.option) {
                this.option = { ...data.option }
            }
        },
        render() {
            return (
                <cpt value={this.value} style={this.style} option={this.option}/>
            )
        }
    })
}