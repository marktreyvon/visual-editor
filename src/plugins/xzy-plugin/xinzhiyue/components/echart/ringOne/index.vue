<template>
  <div :id="id" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import * as echarts from "echarts";
const props = defineProps({
  AxiosX: {
    type: Array,
    default: [],
  },
  AxiosY1: {
    type: [String, Number],
    default: 0,
  },
  AxiosY2: {
    type: [String, Number],
    default: 0,
  },
  id: {
    type: String,
    default: "myChartRingOne"
  }
});
let option = {
    series: [
      {
        center: ['50%', '49%'],
        radius: ["80%", "80%"],
        clockWise: false,
        roundCap: true,
        hoverAnimation: false,
        type: "pie",
        avoidLabelOverlap: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: "#284682",
            borderColor: "#284682",
            borderWidth: 25,
          },
        },
        data: [
          {
            value: "100",
            //name: "55"
          },
          {
            name: "100",
            value: 30,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "red",
                  },
                  {
                    offset: 1,
                    color: "red",
                  },
                ]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#1887FF",
                  },
                  {
                    offset: 0.5,
                    color: "#08B1FF",
                  },
                  {
                    offset: 1,
                    color: "#00C6FF",
                  },
                ]),
                borderWidth: 25,
              },
            },
          },
        ],
      },
    ],
};

let myChart = null;
onMounted(() => {
  myChart = echarts.init(document.getElementById(props.id));
  myChart.setOption(option);
});
watch(props, (res) => {
  if (res && myChart) {
// option.xAxis.data = res.AxiosX;
  option.series[0].data[0].value = 100 - Number(res?.AxiosY1 || 0);
  option.series[0].data[1].value = Number(res?.AxiosY1) || 0;
  myChart.setOption(option);
  }
  
});

</script>

<style>
</style>