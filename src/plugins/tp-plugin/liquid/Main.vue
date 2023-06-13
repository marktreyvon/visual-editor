<template>
    <Liquid :value="value" style="width:100%; height: 100%"/>
</template>

<script>
import Liquid from './components/Liquid.vue'
import { defaultOption } from './default'

export default {
    components: { Liquid },
    props: {
        value: {
            type: [String, Object],
            default: '25'
        }
    },
    data() {
        return {
        }
    },
    computed: {
        myStyle() {
            if (this.style) {
                return this.style
            } else {
                return defaultOption
            }
        },
        textValue() {
            if (JSON.stringify(this.value) !== "{}") {
                return this.value;
            } else {
                return "文本";
            }
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped></style>