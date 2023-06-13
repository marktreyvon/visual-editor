<template>
  <div class="office_bar">
    <div class="moudle_bar">
      <div class="moudle_item item_one">
        <div class="moudle_title">
          <div class="title_bar">
            <div class="title_icon"></div>
            <div class="title_text">室内外环境实时监测</div>
          </div>
          <div class="title_control">
            <div
              class="control_item"
              :class="controlIndex == index ? 'active' : ''"
              v-for="(item, index) in controls"
              :key="index"
              @click="controlIndex = index"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
        <div class="moudle_main">
          <div class="main_standard">
            <div class="standard_num">
              <div
                class="num_item"
                v-for="(item, index) in standardNum"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
            <div class="standard_item">
              <div
                class="item_text"
                v-for="(item, index) in standardList"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="main_echartOne">
            <div class="echart_tip">
              <div class="tip_title">室内{{controls[controlIndex].title}}</div>
              <div class="tip_value">{{ state[controls[controlIndex].field] }}</div>
              <div class="tip_status">良</div>
            </div>
            <RingOne key="ringone" :id="randomString(10)" :AxiosY1="state[controls[controlIndex].field]"/>
          </div>
          <div class="main_echartTwo">
            <div class="echartTwo_status">
              <div class="status_title">室外{{controls[controlIndex].title}}({{controls[controlIndex].unit}})</div>
              <div class="status_value">重度</div>
            </div>
            <div class="echartTwo_bar">
              <div class="echart_tip">
                <div class="tip_title">室外{{controls[controlIndex].title}}</div>
                <div class="tip_value">{{ state[controls[controlIndex].outField] }}</div>
                <div class="tip_status">{{controls[controlIndex].unit}}</div>
              </div>
              <RingTwo key="ringtwo" :id="randomString(10)" :AxiosY1="state[controls[controlIndex].field]"/>
            </div>
          </div>
        </div>
      </div>


      <!-- ================================== 室外 start ====================================== -->
      <div class="moudle_item item_two">
        <div class="moudle_title">
          <div class="title_bar">
            <div class="title_icon"></div>
            <div class="title_text">室外环境实时监测</div>
          </div>
        </div>
        <div class="moudle_main">
          <div class="item_echart_bar columns-2">
            <template v-for="(item, index) in controls" :key="index">
              <div class="echart_item w-full" :key="index" v-if="item.subVisible">
                <div class="echart_tip">
                  <div class="tip_title">{{item.title}}</div>
                  <div class="tip_value">
                    <div class="num">{{ state[controls[index].outField] }}</div>
                    <div class="unit">{{controls[index].unit}}</div>
                  </div>
                  <div class="tip_status">良</div>
                </div>
                <RingThree :id="randomString(10) + index" :key="index" :AxiosY1="state[controls[index].outField]"
                  :AxiosY2="state[controls[index].outField]"/>
              </div>
          </template>
          </div>
        </div>
      </div>
      <!-- ================================== 室外 end ====================================== -->

    </div>

    <!-- ================================== 历史曲线 start ====================================== -->
    <div class="moudle_bar">
      <div class="moudle_item item_three">
        <div class="moudle_title">
          <div class="title_bar">
            <div class="title_icon"></div>
            <div class="title_text">24小时室内外环境检测</div>
          </div>
        </div>
        <div class="moudle_control">
          <div class="control_left">
            <div
              class="left_item"
              :class="controlIndex == index ? 'active' : ''"
              v-for="(item, index) in controls"
              :key="index"
              @click="controlIndex = index"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="control_right">
            <div class="right_item">室内</div>
            <div class="right_item">室外</div>
          </div>
        </div>
        <div class="echart_line">
          <BarEchart key="barechart" :AxiosX="state['systime']" :AxiosY1="state['roomData']" :AxiosY2="state['outData']"/>
        </div>
      </div>
    </div>
    <!-- ================================== 历史曲线 end ====================================== -->

  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, watchEffect, onMounted } from "vue";
import BarEchart from "../echart/barEchart/index.vue";
import RingOne from "../echart/ringOne/index.vue";
import RingTwo from "../echart/ringTwo/index.vue";
import RingThree from "../echart/ringThree/index.vue";

const controlIndex = ref(0);
const controls = reactive([
  { title: "PM2.5", unit: "μg/m³", field: "PM2.5", outField: "outPM2.5", subVisible: false},
  { title: "湿度", unit: "%", field: "humidity",  outField: "outHumidity", subVisible: true},
  { title: "甲醛", unit: "mg/m³", field: "formaldehyde",  outField: "outFormaldehyde", subVisible: true},
  { title: "温度", unit: "℃", field: "temp",  outField: "outTemp", subVisible: true},
  { title: "二氧化碳", unit: "ppm", field: "co2",  outField: "outCo2", subVisible: true},
  { title: "负氧离子", unit: "个/cm³", field: "oxy",  outField: "outOxy", subVisible: false},
])
const standardNum = reactive(["≥500", "250", "150", "115", "75", "35", "0"]);
const standardList = reactive(["严重", "重度", "中度", "轻度", "良", "优"]);

const props = defineProps({
  current: Object,
  history: Object,
  property: Object
});
const state = reactive<any>({});

watch(() => props.current, (value: any) => {
  if (value) {
    controls.forEach(item => {
      state[item.field] = value[item.field] || 0;
      state[item.outField] = value[item.outField] || 0;
    })
    console.log('xinzhiyue.watch.props.current', value.current);
  }
});

watch(() => props.history, (value: any) => {
  if (value) {
    const field = controls[controlIndex.value].field;
    const outField = controls[controlIndex.value].outField;
    state['roomData'] = value[field];
    state['outData'] = value[outField];
    let systime = value['systime'];
    systime = systime && systime.map((item: any) => item.slice(11, 16));
    state['systime'] = systime;
    console.log('xinzhiyue.watch.props.history', value['systime']);
  }
});

const emit = defineEmits(['update:property']);
watch(controlIndex, (value: any) => {
  emit('update:property', {...controls[value] });
})

onMounted(() => {
  emit('update:property', {...controls[0] })
})


const randomString = (len?: number) => {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
</script>
<style >
.office_bar {
  width: 100%;
}
.moudle_bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.moudle_bar:last-child {
  margin-top: 15px;
}
.moudle_item {
  background: #173268;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 6px;
}
.item_one {
  width: 65%;
  height: 517px;
}
.item_two {
  width: 34%;
  height: 517px;
}
.item_three {
  width: 100%;

}
.moudle_title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #ffffff;
}
.title_bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title_bar .title_icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #0265d7;
  margin-right: 8px;
  box-sizing: border-box;
}
.title_control {
  display: flex;
  flex-direction: row;
  align-items: center;

}
.title_control .control_item {
  padding: 2px 12px;
  border-radius: 18px;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 500;
  color: #b2bbcd;
  cursor: pointer;
  transition: 0.5s;
}
.title_control .control_item:not(:last-child) {
  margin-right: 25px;
}
.title_control .active {
  background: #006ae1;
  color: #fff;
}

.moudle_main {
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
}
.main_standard {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 33px;
  margin-right: 61px;
}
.standard_num {
  width: 58px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.num_item{
  font-size: 16px;
  font-family: Inter;
  font-weight: normal;
  color: #DAE1EF;;
}

.standard_item {
  width: 58px;
  height: 369px;
  background: url("../../assets/daping/office/tip.png") center center;
  background-size: 100% 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 500;
  color: #ffffff;
}
.main_echartOne {
  width: 404px;
  height: 404px;
  margin-right: 56px;
  background: url("../../assets/daping/office/z.png") center center;
  background-size: 100% 100%;
  position: relative;
}
.echart_tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #dae1ef;
}
.main_echartOne .tip_title {
  font-size: 18px;
}
.main_echartOne .tip_value {
  font-size: 80px;
  font-weight: 900;
}
.main_echartOne .tip_status {
  width: 112px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  background: linear-gradient(151deg, #ffe748, #ffb833);
  border-radius: 18px;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
.main_echartOne .status_value {
  width: 112px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  background: linear-gradient(151deg, #8b63ff, #796fff);
  border-radius: 18px;
  font-size: 20px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
 


.main_echartTwo {
  width: 252px;
}
.main_echartTwo .echartTwo_status {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_echartTwo .echartTwo_status .status_title {
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #dae1ef;
}
.main_echartTwo .echartTwo_status .status_value {
  width: 112px;
  height: 37px;
  line-height: 37px;
  text-align: center;
  color: #fff;
  background: linear-gradient(151deg, #8b63ff, #796fff);
  border-radius: 18px;
  margin-top: 10px;
}
.main_echartTwo .echartTwo_bar {
  width: 252px;
  height: 264px;
  background: url("../../assets/daping/office/z2.png") center center;
  background-size: 100% 100%;
  margin-top: 49px;
  position: relative;
}
.main_echartTwo .echartTwo_bar .echart_tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #dae1ef;
}
.main_echartTwo .echartTwo_bar .echart_tip .tip_title {
  font-size: 16px;
}
.main_echartTwo .echartTwo_bar .echart_tip .tip_value {
  font-size: 45px;
  font-weight: 600;
}
.main_echartTwo .echartTwo_bar .echart_tip .tip_status {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 18px;
  font-size: 15px;
  font-family: SimHei;
  font-weight: 400;
  color: #fff;
}

.item_echart_bar {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item_echart_bar:last-child {
  margin-top: 23px;
}
.item_echart_bar .echart_item {
  width: 195px;
  height: 205px;
  position: relative;
  background: url("../../assets/daping/office/z3.png") center center;
  background-size: 100% 100%;
}
.item_echart_bar .echart_tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: #dae1ef;
}
.item_echart_bar .tip_title {
  font-size: 15px;
}
.item_echart_bar .tip_value {
  font-size: 25px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item_echart_bar .unit {
  font-size: 18px;
  font-weight: 500;
  color: #56759e; 
  margin-left: 5px;
}
.item_echart_bar .tip_status {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: linear-gradient(151deg, #ffe748, #ffb833);
  border-radius: 18px;
  font-size: 15px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
.item_echart_bar .status_value {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: linear-gradient(151deg, #8b63ff, #796fff);
  border-radius: 18px;
  font-size: 15px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
.item_echart_bar .status_value2 {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: linear-gradient(151deg, #FF2C2C, #FF4967);
  border-radius: 18px;
  font-size: 15px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
.item_echart_bar .status_value3 {
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: linear-gradient(151deg, #5DFF47, #39FF50);
  border-radius: 18px;
  font-size: 15px;
  font-family: SimHei;
  font-weight: 400;
  color: #181f49;
}
         
.moudle_control {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.control_left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
}
.left_item {
  padding: 1px 8px;
  border-radius: 14px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: #b2bbcd;
  cursor: pointer;
 
}
.left_item:not(:last-child) {
  margin-right: 20px;
}
.left_item.active {
  background: #006ae1;
  color: #fff;
}
.control_right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right_item {
  width: 66px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 13px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 500;
  color: #181f49;
}
.right_item:first-child {
  background: linear-gradient(151deg, #26ff82, #7dff68);
}
.right_item:last-child {
  margin-left: 18px;
  background: linear-gradient(151deg, #00c6ff, #4bf9ff);
}

.echart_line {
  width: 100%;
  height: 180px;
  margin-top: 18px;
}
</style>