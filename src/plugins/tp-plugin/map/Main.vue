<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <el-amap ref="mapRef" :center="center" :zoom="zoom" :zoomEnable="false" :dragEnable="false">
            <el-amap-layer-district :visible="visible" type="Province" :adcode="adcode" :depth="2"
                :styles="styles"></el-amap-layer-district>
        </el-amap>
    </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        value: {
            type: [Object, String, Number],
            default: () => {
                return {};
            },
        }
    },
    data() {
        return {
            zoom: 7,
            center: [118.763563, 32.061377],
            adcode: "320100",
            type: 'city',
            visible: true,
            cursor: 'default',
            bubble: true,
            zoomEnable: false,
            dragEnable: false,
            styles: {
                'fill': 'green',
                'province-stroke': 'cornflowerblue',
                'city-stroke': 'white', // 中国地级市边界
                'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
            }
        };
    },
    watch: {
        value: {
            handler(val) {
                console.log("Main.value", val);
                this.adcode = val.value;
                this.center = val.geoCoord
            },
            deep: true
        }
    },
    methods: {
    }
});
</script>

<style lang="scss" scoped></style>