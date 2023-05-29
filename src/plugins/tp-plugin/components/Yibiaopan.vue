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
        },
        formData: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
  
    data() {
        return {
            id: "container_gauge_" + randomString(10),
            gauge: <any>null,
            range:"",
            pin:"",
            pointer:"",

        }
    },
  
    mounted() {
        this.gauge = new Gauge(this.id, {
            percent: 0.75,
            range: {
                color: this.range,
            },
            indicator: {

                pointer: {
                    style: {
                        stroke: "#00FFB3",
                    },
                },
                pin: {
                    style: {
                        stroke: '#0400FF',
                    },
                },
            },
            axis: {
                label: {
                    formatter(v) {
                        return Number(v) * 100;
                    },
                },
                subTickLine: {
                  count: 3,
                },
            },
            statistic: {
                content: {
                    formatter: (percent: any) => {
                        return `Rate: ${(percent * 100).toFixed(0)}%`
                    },
                },
    
            },
        });

        this.gauge.render();
    },
    watch: {
        formData: {
            handler(val) {
                console.log(val,'val');
                this.gauge.update({
                    range: { color: val.ProgressColor },
                    indicator: {
                        pointer: {
                            style: {
                                stroke: val.pointerShow==true?val.pointerColor:"transparent",
                            },
                        },
                        pin: {
                            style: {
                                stroke:  val.pointerShow==true?val.pinColor:"",
                            },
                        },
                    },
                    axis: {
                        label: val.tagShow==true?{ formatter(v: any) { return Number(v) * 100;},}:null,
                        subTickLine: val.tagCunShow==true?{ count: 3,}:{ count: 0,},
                    },
                });
            },
            deep: true
        }
    },
})

</script>
  
<style lang="scss" scoped></style>