<template>
  <div id="myChartBar" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import * as echarts from "echarts";
const props = defineProps({
  AxiosX: {
    type: Array,
    default: [],
  },
  AxiosY1: {
    type: Array,
    default: [],
  },
  AxiosY2: {
    type: Array,
    default: [],
  },
});
const state = ref({
  option: {
    tooltip: {
      show: true,
      trigger: "axis",
    },
    grid: {
      top: 10,
      bottom: 20,
      left: 30,
      right: 20,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: "#889fcc",
          },
        },
        boundaryGap: false,
        data: [
          "00.00",
          "02.00",
          "06.00",
          "08.00",
          "10.00",
          "12.00",
          "14.00",
          "16.00",
          "18.00",
          "20.00",
          "22.00",
          "24.00",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: ["#315070"],
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#889fcc",
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        z: 200,
        name: "室内",

        type: "line",
        smooth: true,
        symbolSize: 15,
        showSymbol: false,
        itemStyle: {
          normal: {
            show: false,
            color: "#26FF82", //改变折线点的颜色
            lineStyle: {
              color: "#26FF82", //改变折线颜色
            },
            label: {
              show: false, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "#999999",
                fontSize: 10,
              },
            },
          },
          emphasis: {
            show: true,
            color: "#3282FF",
            borderColor: "#ffffff",
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "##fff",
                fontSize: 14,
              },
            },
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(38, 255, 130, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(38, 255, 130, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(38, 255, 130, 1)",
            shadowBlur: 10,
          },
        },
        data: [
          5.9, 6.9, 10.1, 11.7, 4.3, 6.2, 21.6, 43.6, 51.4, 10.4, 17.3, 0.7,
        ],
      },
      {
        z: 200,
        name: "室外",

        type: "line",
        smooth: true,
        symbolSize: 15,
        showSymbol: false,
        itemStyle: {
          normal: {
            show: false,
            color: "#00C6FF", //改变折线点的颜色
            lineStyle: {
              color: "#00C6FF", //改变折线颜色
            },
            label: {
              show: false, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "#999999",
                fontSize: 10,
              },
            },
          },
          emphasis: {
            show: true,
            color: "#3282FF",
            borderColor: "#ffffff",
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "##fff",
                fontSize: 14,
              },
            },
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 198, 255, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 198, 255, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 198, 255, 1)",
            shadowBlur: 10,
          },
        },
        data: [
          20.9, 22.9, 34.1, 46.7, 18.3, 10.2, 20.6, 53.6, 61.4, 70.4, 87.3, 0.7,
        ],
      },
    ],
  },
});
let setOption = () => {
  const myChartBar = document.getElementById("myChartBar")
  if (!myChartBar) return
  let myChart = echarts.init(myChartBar);
  myChart.setOption(state.value.option);
};
onMounted(() => {
  setOption();
});
watch(props, (res) => {
  // state.value.option.xAxis.data = res.AxiosX;
  state.value.option.series[0].data = <any>res.AxiosY1;
  state.value.option.series[1].data = <any>res.AxiosY2;
  setOption();
});
</script>

<style>
</style>