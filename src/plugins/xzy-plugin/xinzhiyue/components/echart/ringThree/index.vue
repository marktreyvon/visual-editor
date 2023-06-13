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
    type: [Number, String],
    default: 0,
  },
  AxiosY2: {
    type: [Number, String],
    default: 0,
  },
  id: {
    type: String,
    default: "myChartRingThree"
  }
});
let option = {
    series: [
      {
        center: ['50%', '47%'],
        radius: ["75%", "75%"],
        clockWise: false,
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
            borderWidth: 18,
          },
        },
        data: [
          {
            value: 100,
            //name: "55"
          },
          {
            value: 0,
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
                borderWidth: 18,
              },
            },
          },
        ],
      },
    ],
  }

let myChart = null;
onMounted(() => {
  myChart = echarts.init(document.getElementById(props.id));
  myChart.setOption(option);
  setTimeout(() => {
    option.series[0].data[0].value = '10';
    myChart.setOption(option);
  }, 2000);
});
watch(props, (res) => {
  if (res && myChart) {
    console.log('====ringThree', res.AxiosY1)
    // state.option.xAxis.data = res.AxiosX;
    option.series[0].data[0].value = 100 - res.AxiosY1;
    option.series[0].data[1].value = res.AxiosY1;
    console.log('====ringThree', option)
    myChart.setOption(option);
  }
  
});


</script>

<style>
</style>