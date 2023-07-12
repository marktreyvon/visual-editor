<template>
    <Liquid :id="getId()" :value="value" style="width:100%; height: 100%"/>
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
            id: randomString(8)
        }
    },
    computed: {
    },
    methods: {
        getId() {
            return randomString(8)
        }
    },
    mounted() {
        console.log('Liquid', this.id)
    }
}
</script>
<style lang="scss" scoped>

</style>