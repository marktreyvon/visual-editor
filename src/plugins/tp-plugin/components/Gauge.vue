<template>
    <div :id="'container_gauge_' + id" style="width:100%;height:100%"></div>
  </template>
  
  <script lang="ts">
  import { Gauge } from '@antv/g2plot';
  import { defineComponent } from "vue";
  
  export default defineComponent ({
      name: "Gauge",
      components: {
          Gauge
      },
      props: {
        id: {
            type: String,
            required: true,
            default: "gauge"
        }
      },
      mounted() {
          const gauge = new Gauge('container_gauge_' + this.id, {
          percent: 0.75,
          range: {
              color: '#5B8FF9',
          },
          statistic: {
              content: {
              formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
              },
          },
          });
  
          gauge.render();
      }
  })
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>