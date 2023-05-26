<template>
  <div id="myChartRingOne" :style="{ width: '100%', height: '100%' }"></div>
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
  },
});
const myChart = ref(null);
let setOption = () => {
  let myChart = echarts.init(document.getElementById("myChartRingOne"));
  myChart.setOption(state.value.option);
};
onMounted(() => {
  setOption();
});
watch(props, (res) => {
  state.value.option.xAxis.data = res.AxiosX;
  state.value.option.series[0].data = res.AxiosY1;
  state.value.option.series[1].data = res.AxiosY2;
  setOption();
});
</script>

<style>
</style>