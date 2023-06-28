<template>
    <div :style="myStyle" style="width:100%;height:100%;">
        <el-amap ref="mapRef" :center="center" :zoom="zoom" :zoomEnable="zoomEnable" :dragEnable="dragEnable">
            <el-amap-layer-district :visible="visible" :type="type" :adcode="adcode" :depth="2"
                :styles="styles"></el-amap-layer-district>
            <el-amap-marker v-for="marker in markers" :key="marker.index" :position="marker.position"
                @click="marker.events.click"></el-amap-marker>
            <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible"
                :content="window.content" :offset="window.offset"></el-amap-info-window>
        </el-amap>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import area from './area'
export default defineComponent({
    props: {
        value: {
            type: [Object, String, Number],
            default: () => {
                return {};
            },
        },
        style: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {
            zoom: 7,
            center: [118.763563, 32.061377],
            adcode: "320100",
            type: 'Province',
            visible: true,
            zoomEnable: false,
            dragEnable: false,
            styles: {
                'fill': 'green',
                'province-stroke': 'cornflowerblue',
                'city-stroke': 'white', // 中国地级市边界
                'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
            },
            markerFontSize: 10,
            markerData: area.markers,
            markers: [], //点
            windows: [],
            window: '',
        };
    },
    watch: {
        value: {
            handler(val) {
                if (val.staticValue) {
                    let data = JSON.parse(val.staticValue);
                    this.addMarkers(data);
                }
            },
            deep: true
        },
        style: {
            handler(val) {
                console.log("---val---", val);
                this.markerFontSize = val.fontSize
                if (val.map) {
                    let map = val.map
                    this.adcode = map.value;
                    this.center = map.geoCoord
                }

                this.addMarkers(this.markerData)
            },
            deep: true
        }
    },
    mounted() {
        this.addMarkers(this.markerData)
    },
    methods: {
        addMarkers(mks) {
            let that = this;
            let markers = [];
            let windows = [];
            for (let i in mks) {
                let mk = mks[i];
                markers.push({
                    position: mk.position,
                    events: {
                        click() {
                            console.log('------click-----');
                            that.windows.forEach(window => {
                                window.visible = false; //关闭窗体
                            });
                            that.window = that.windows[i];
                            that.$nextTick(() => {
                                that.window.visible = true;//点击点坐标，出现信息窗体
                            });
                        }
                    },
                });
                windows.push({
                    position: mk.position,
                    content: "<div style='width:120px; font-size: " + that.markerFontSize + "px'>" +
                        "<div>" + "name:" + mk.name + "</div>" +
                        "<div>" + "value：" + "<span style='color: #66A0FF'>" + mk.value + "</span>" + "</div></div>",
                    offset: [5, -15],//窗体偏移
                    visible: false//初始是否显示
                })
            }
            this.markers = markers;
            this.windows = windows;
        }
    }
});
</script>

<style lang="scss" scoped></style>