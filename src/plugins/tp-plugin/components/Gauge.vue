<template>
    <div :id="id" style="width:100%;height:100%"></div>
</template>
  
<script lang="ts">
import { Gauge } from '@antv/g2plot';
import { defineComponent } from "vue";
import { randomString } from "@/utils"
export default defineComponent({
    name: "Gauge",
    components: {
        Gauge
    },
    props: {
        id: {
            type: String,
            required: true,
            default: "gauge"
        }
    },
    data() {
        return {
            id: "container_gauge_" + randomString(10)
        }
    },
    mounted() {
        const gauge = new Gauge(this.id, {
            percent: 0.75,
            range: {
                color: '#5B8FF9',
            },
            statistic: {
                content: {
                    formatter: (percent: any) => {
                        return `Rate: ${(percent * 100).toFixed(0)}%`
                    },
                },
            },
        });

        gauge.render();
    }
})

</script>
  
<style lang="scss" scoped></style>