<template>
    <Liquid :value="value" style="width:100%; height: 100%"/>
</template>

<script>
import Liquid from './components/Liquid.vue'
import { defaultData } from './default'

export default {
    components: { Liquid },
    props: {
        value: {
            type: [String, Object, Number],
            default: defaultData.static
        }
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped></style>