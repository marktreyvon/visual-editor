<template>
    <Liquid :id="id" :value="value" style="width:100%; height: 100%"/>
</template>

<script>
import Liquid from './components/Liquid.vue'
import { defaultData } from './default'
import { randomString } from '@/utils'
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
            id: `liquid-${randomString(10)}`
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped></style>