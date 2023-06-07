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
        value: {
            type: [Object, String, Number],
            default: ""
        }
    },
    data() {
        return {
            id: "container_gauge_" + randomString(10),
            gauge: <any>null,
            range: "",
            pin: "",
            pointer: "",
            option: {
                percent: 0.75,
                range: {
                    ticks: [0, 1],
                    color: 'l(0) 0:#B8E1FF 1:#3D76DD',
                },
                indicator: {
                    pointer: {
                        visible: true,
                        style: {
                            stroke: '#D0D0D0',
                            lineWidth: 1,
                            fill: '#D0D0D0',
                        },
                    },
                    pin: {
                        visible: true,
                        style: {
                            stroke: '#D0D0D0',
                        },
                    },
                },
                axis: {
                    visible: true,
                    label: {
                        formatter(v: any) {
                            return Number(v) * 100;
                        },
                    },
                    subTickLine: {
                        count: 3,
                    },
                },
                statistic: {
                    content: {
                        formatter: (data: any) => {
                            console.log('yibiaopan.formatter', data)
                            const percent: number = data?.percent || 0;
                            return `Rate: ${(percent * 100).toFixed(0)}%`
                        },
                        style: {
                            color: 'rgba(0,0,0,0.65)',
                            fontSize: '10px'
                        },
                    },
                },
            }
        }
    },
    mounted() {
        this.render();
    },
    watch: {
        value: {
            handler(val) {
                if (val) {
                    this.$nextTick(() => {
                        this.gauge.changeData(Number(val));
                    })
                }
            }
        },
        formData: {
            handler(val, oldVal) {
                if (JSON.stringify(val) === "{}") return;
                if (JSON.stringify(val) === JSON.stringify(oldVal)) return;
                // 是否显示指针
                this.option.indicator.pointer.style.stroke = val.pointerShow ? val.pointerColor : "transparent";
                // 是否显示圆心
                this.option.indicator.pin.style.stroke = val.pointerShow ? val.pinColor : "";

                // 是否显示标签和刻度
                this.option.axis.visible = val.tagShow || false;

                console.log('yibiaopan.formData.option', this.option)
                this.gauge.update(this.option);
            },
            deep: true
        }
    },
    methods: {
        render() {
            this.gauge = new Gauge(this.id, this.option);
            console.log('yibiaopan.formData', this.formData)
            this.gauge.render();
        }
    }
})

</script>
  
<style lang="scss" scoped></style>