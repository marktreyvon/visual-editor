<template>
    <div style="width: 100%; height: 100%" :style="{
        borderRadius: background.bordereduse + '%',
        border: `${background.borderSize + 'px'} solid ${bgColorAndOpicity}`,
        backgroundColor: bgColorAndOpicity1
    }">
        <div v-if="background.pointerShow">
            <h1  class="header"
            :style="{ fontSize: background.sizeborder + 'px', color: background.color1 }">{{ background.header }}</h1>
        </div>

        <div class="div1" :id="id" style="width:100%;height:100%;opacity: 1;" >
        </div>
    </div>
</template>

<script lang="ts">
import { Column } from '@antv/g2plot';
import { defineComponent } from "vue";
import { randomString } from "@/utils"
export default defineComponent({
    name: "Gauge",
    components: {
        Column
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
        formData1: {
            type: [Array, Object, String, Number],
            default: () => {
                return {};
            },
        },
    },

    data() {
        return {
            id: "container_piechart_" + randomString(10),
            Column: null,
            border: "border:5px solid red",
            background: {
                pointerShow: true,
                color1: '',
                sizeborder: '',
                bordereduse: 0,
                slidingblock: 10,
                borderSize: 0,
                color: '',
                bgColor: '',
                beij: '',
                header: '',
                XshowHied: true,
                sizeMix: 15,
                Xcolor: '',
                Xcolor1: '',
                Axiswidth: '',
                YshowHied: '', // Y轴展现与隐藏
                Ysize: '',
                Ycolor: '',
                Ycolor1: '',
                Ysizeborder: '',
                Zcolor: '',
                Zwidth: '',
                Zsize: '',
            },
            bgColorAndOpicity: '',
            bgColorAndOpicity1: '#FFFFFF',
            keydata: {
                value: "",
                options: ['静态数据', '动态数据', '设备数据'],
                selectedValue: '',
                inputText: [
                    { type: '家具家电', sales: 38 },
                    { type: '粮油副食', sales: 52 },
                    { type: '生鲜水果', sales: 61, },
                    { type: '美容洗护', sales: 145, },
                    { type: '母婴用品', sales: 48, },
                ]
            },
        }
    },

    mounted() {

        (this.Column as any) = new Column(this.id, {
            data: this.keydata.inputText,
            xField: 'type',
            yField: 'sales',
            label: {
                // 可手动配置 label 数据标签位置
                position: 'middle', // 'top', 'bottom', 'middle',
                // 配置样式
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                    fontSize: 15
                },
            },
            xAxis: {
                line: {
                    style: {
                        stroke: 'black',
                        lineWidth: 1, // 设置轴线宽度为4
                    }
                },
                label: {
                    autoHide: true,
                    autoRotate: true,
                    style: {
                        fontSize: 15,
                        fill: 'black',
                    },

                },

            },
            yAxis: {
                label: {
                    style: {
                        fontSize: 15,
                        fill: 'black',
                    },

                },
                line: {
                    style: {
                        stroke: 'black',
                        lineWidth: 1, // 设置轴线宽度为4
                    }
                },

            },
            meta: {
                type: {
                    alias: '类别',
                },
                sales: {
                    alias: '销售额',
                },
            },
            minColumnWidth: 10,
        });


        (this.Column as any).render();
    },
    watch: {
        formData: {
            handler(val) {
                this.background = val;
                const chartData = this.Column.options.data || this.keydata.inputText
                let i = 0

                // 计算边框的透明度
                function hexToRgba(hex: any, alpha: any) {
                    if (!hex) return "";
                    var r = parseInt(hex.slice(1, 3), 16);
                    var g = parseInt(hex.slice(3, 5), 16);
                    var b = parseInt(hex.slice(5, 7), 16);
                    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
                }
                this.bgColorAndOpicity = hexToRgba(this.background.bgColor, this.background.beij as any / 10);

                function hexToRgba1(hex: any, alpha: any) {
                    if (!hex) return "";
                    var r = parseInt(hex.slice(1, 3), 16);
                    var g = parseInt(hex.slice(3, 5), 16);
                    var b = parseInt(hex.slice(5, 7), 16);
                    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
                }
                this.bgColorAndOpicity1 = hexToRgba1(this.background.color, this.background.slidingblock as any / 10) || "(255,255,255)";

                (this.Column as any).options.xAxis.visible = this.background.XshowHied;

                (this.Column as any).options.xAxis.label.style.fontSize = Number(this.background.sizeMix);

                (this.Column as any).options.xAxis.label.style.fill = this.background.Xcolor;

                (this.Column as any).options.xAxis.line.style.stroke = this.background.Xcolor1;

                (this.Column as any).options.xAxis.line.style.lineWidth = Number(this.background.Axiswidth);

                (this.Column as any).options.yAxis.visible = this.background.YshowHied;

                (this.Column as any).options.yAxis.label.style.fontSize = Number(this.background.Ysize);

                (this.Column as any).options.yAxis.label.style.fill = this.background.Ycolor;

                (this.Column as any).options.yAxis.line.style.stroke = this.background.Ycolor1;

                (this.Column as any).options.yAxis.line.style.lineWidth = Number(this.background.Ysizeborder);

                (this.Column as any).options.color = this.background.Zcolor;
                if(this.background.barColors && this.background.barColors.length > 1){
                    (this.Column as any).options.color  = (item, i) => {
                        console.log(item, i)
                        const ind = i % this.background.barColors.length
                        const barColor = this.background.barColors[ind]
                        i++
                        return barColor
                    }
                }

                (this.Column as any).options.minColumnWidth = this.background.Zwidth;

                (this.Column as any).options.label.style.fontSize = Number(this.background.Zsize);
                // console.log((this.Column as any).interval());
                (this.Column as any).render();
            },
            deep: true,
        },
        formData1: {
            handler(val) {
                let arr2: string | any[] = []
                console.log(val)
                let arr = Array.from(val)

                let jsonStr = arr.join("").replace(/\s+/g, "");

                arr2.push(eval(jsonStr))

                if (jsonStr.length > 1) {
                    (this.Column as any).options.data = arr2[0];
                    (this.Column as any).render()
                }

            },
            deep: true,
        }
    }
})

</script>

<style lang="scss" scoped>
.header {
    left: 0;
    top: -30px;
}

.div1 {
    border: 1px solid red;
}

.div2 {
    top: 0;
    left: 0;
}
</style>
