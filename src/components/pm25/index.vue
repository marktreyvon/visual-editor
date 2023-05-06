<template>
  <div id="pm25-container" style="width:100%;height:100%"></div>
</template>

<script>
import { ref, reactive } from "vue";
import { Gauge } from '@antv/g2plot';
import { defineComponent } from "vue";

export default defineComponent ({
    components: {
        Gauge
    },
    mounted() {
        const gauge = new Gauge('pm25-container', {
        percent: 0.75,
        range: {
            color: '#5B8FF9',
        },
        statistic: {
            content: {
            formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
            },
        },
        });

        gauge.render();
    }
})

</script>

<style lang="scss" scoped>

</style>