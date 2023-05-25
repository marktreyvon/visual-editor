<template>
  <div id="myChartRingSix" :style="{ width: '100%', height: '100%' }"></div>
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
            value: "55",
            //name: "55"
          },
          {
            name: "55",
            value: 80,
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
  },
});
const myChart = ref(null);
let setOption = () => {
  let myChart = echarts.init(document.getElementById("myChartRingSix"));
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