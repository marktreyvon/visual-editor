<template>
    <div id="chart-view" style="width:100%;height:100%"></div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, markRaw } from "vue";
import * as echarts from 'echarts'
const someEcharts = ref<any>();

export default defineComponent({
    name: "chart",
    components: {
        echarts
    },
    mounted() {
        someEcharts.value = markRaw(
          echarts.init(
              document.getElementById("chart-view") as HTMLElement
          )
        );
        loadCharts();
        window.onresize = function () {
            someEcharts.value.resize();
        };
    },
    methods: {
        loadCharts: () => {
            type EChartsOption = echarts.EChartsOption;
            someEcharts.value.setOption(options() as EChartsOption);
        }
    },
});

const options = () => {
    return  {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
}
const loadCharts = () => {
    type EChartsOption = echarts.EChartsOption;
    someEcharts.value.setOption(options() as EChartsOption);
};

</script>

<style lang="scss" scoped></style>