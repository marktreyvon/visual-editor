<template>
    <div :id="id" style="width:100%;height:100%;float: left;" :style="{
        borderRadius: background.bordereduse + '%',
        backgroundColor: bgColorAndOpicity,
        border: `${background.borderSize + 'px'} solid ${background.borderColor}`,
    }">
    </div>
</template>
  
<script lang="ts">
import { Line } from '@antv/g2plot';
import { defineComponent } from "vue";
import { randomString } from "@/utils"
export default defineComponent({
    name: "Gauge",
    components: {
        Line
    },
    props: {
        id: {
            type: String,
            required: true,
            default: "gauge"
        },
        formData: {
            type: [Object],
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
            id: "container_curve_" + randomString(10),
            line: null,
            data: [
                {
                    xAxis: '周一',
                    scales: 10
                },
                {
                    xAxis: '周二',
                    scales: 20
                },
                {
                    xAxis: '周三',
                    scales: 60
                },
                {
                    xAxis: '周四',
                    scales: 12
                },
                // {
                //     xAxis: '周五',
                //     scales: 4
                // }
            ],
            border: "border:5px solid red",
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            xAxis: {
                tickCount: 5,
            },
            slider: {
                start: 0.1,
                end: 0.9,
            },
            background: {
                Color: "",
                XColor: "",
                XTextColor: "",
                XfontSize: "",
                bgColor: "",
                borderColor: "",
                borderSize: "",
                bordereduse: 0,
                fontColor: "",
                fontSize: 20,
                slidingblock: 10,
            },
            bgColorAndOpicity: '#FFFFFF',
            keydata: {
                value: "",
                options: ['静态数据', '动态数据', '设备数据'],
                selectedValue: '',
            },
        }
    },

    mounted() {
        (this.line as any) = new Line(this.id, {
            data: this.data,
            padding: this.padding as any,
            xField: 'xAxis',
            yField: 'scales',
            xAxis: {
                // type: 'timeCat',
                tickCount: 5,
            },
            slider: {
                start: 0.1,
                end: 0.5,
            },
        });
        (this.line as any).render();
    },

    watch: {
        formData: {
            handler(val) {
                console.log(val);
                function hexToRgba(hex: any, alpha: any) {
                  if(!hex?.slice) return "rgba(" + 0 + ", " + 0 + ", " +0 + ", " + alpha + ")";
                    var r = parseInt(hex.slice(1, 3), 16);
                    var g = parseInt(hex.slice(3, 5), 16);
                    var b = parseInt(hex.slice(5, 7), 16);
                    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
                }
                this.background = val;
                this.bgColorAndOpicity = hexToRgba(this.background.Color, this.background.slidingblock as any / 10);
                console.log(this.bgColorAndOpicity);

                // console.log((this.line as any).options);
                let Xstyle = {
                    style: {
                        fontSize: 12,
                        fill: '',
                    }
                };
                Xstyle.style.fontSize = Number(val.XfontSize);
                Xstyle.style.fill = val.XTextColor;
                (this.line as any).options.xAxis.label.style = Xstyle.style;

                let Xline = {
                    line: {
                        style: {
                            stroke: ''
                        }
                    }
                };
                Xline.line.style.stroke = val.XColor;
                (this.line as any).options.xAxis.line = Xline.line;

                let Ystyle = {
                    style: {
                        fontSize: 12,
                        fill: '',
                    }
                };
                Ystyle.style.fontSize = Number(val.YfontSize);
                Ystyle.style.fill = val.YTextColor;
                (this.line as any).options.yAxis.label.style = Ystyle.style;

                let Yline = {
                    line: {
                        style: {
                            stroke: ''
                        }
                    }
                };
                Yline.line.style.stroke = val.YColor;
                (this.line as any).options.yAxis.line = Yline.line;
                (this.line as any).render();
            },
            deep: true,
        },
        formData1: {
            handler(val) {
                console.log(val);
                if (val !== '') {
                    let arr = Array.from(val)
                    let jsonStr = arr.join("").replace(/\s+/g, "");
                    let obj = JSON.parse(jsonStr)
                    let newArr: any[] = []
                    console.log(obj.xAxis);

                    obj.xAxis.map((item: any, index: number) => {
                        let newObj = {
                            xAxis: item,
                            scales: obj.series[0].data[Number(index)]
                        }
                        newArr.push(newObj)
                    });
                    // this.data
                    console.log(newArr);
                    // this.data = newArr;
                    if (jsonStr.length > 1) {
                        (this.line as any).options.data = newArr;
                        if (obj.series[0].data[obj.series[0].data.length - 1] !== undefined) {
                            (this.line as any).render()

                        }
                    }
                }

            },
            deep: true,
        }
    }
})

</script>

  
<style lang="scss" scoped>
.header {
    width: 50px;
    position: absolute;
    left: 0;
    top: 10px;
}
</style>
