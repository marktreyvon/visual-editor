import { defineStore } from "pinia";

import { shallowRef } from "vue";
//import { SceneBackstage } from '@/engines/lib/main'
import { SceneBackstage } from "../scene/lib/engine.js";

export const useSceneDemo = defineStore("sceneDemo", {
  state: () => {
    return {
      scene: shallowRef(null), //返回场景对象
    };
  },
  actions: {
    //功能：创建SceneRender，并返回场景对象
    createSceneRender(containerDiv) {
      this.scene = new SceneBackstage(containerDiv); //创建场景，并返回场景对象
    },

    //功能：注册场景加载完成的回调，一般用于设置历史数据或默认数据
    initData(fn) {
      this.scene.addEventListener("sceneLoaded", fn);
    },
    //功能：设置数据面板的样式方法
    setColor(textColor, bgColor, fontSize) {
      if (this?.scene?.hotspotMgr) {
        this.scene.hotspotMgr.models.forEach((key, wal) => {
          key.textColor = textColor;
          key.bgColor = bgColor;
          key.fontSize = fontSize;
          key.update();
        });
      }
    },
    //功能：获取数据面板的样式方法
    getColor() {
      let obj = {
        fontSize: 30,
        textColor: "fff",
        bgColor: "#00AEFF",
      };
      console.log(this.scene.hotspotMgr.models, "32832139213");

      this.scene.hotspotMgr.models.forEach((key, wal) => {
        obj.textColor = key.textColor;
        obj.bgColor = key.bgColor;
        obj.fontSize = key.fontSize;
      });
      return obj;
    },
    //功能：修改绑定的数据，调用案例2
    freshSensors(sensorValue) {
      //可以更新单个，或者同时更新一组设备数据
      //设备对应三维中的从左向右进行ID匹配
      if (!sensorValue) {
        let sensorValue = [
          {
            sensorId: 1,
            gatherTime: "2023-06-01 15:48:08",
            gatherValue: 98.71,
          },
          { sensorId: 2, gatherTime: "2023-06-01 15:48:08", gatherValue: 1.83 },
          {
            sensorId: 5,
            gatherTime: "2023-06-01 15:48:08",
            gatherValue: 84.96,
          },
          {
            sensorId: 6,
            gatherTime: "2023-06-01 15:48:08",
            gatherValue: 176.41,
          },
          { sensorId: 7, gatherTime: "2023-06-01 15:48:08", gatherValue: 16.4 },
        ];
      }

      this.scene.freshSensors(sensorValue);
      return sensorValue;
    },
    //功能：动态数据更新，调用案例1
    freshAttributes(AttributesObj) {
      //单个
      let AttributesObj1 = { cylinderName: "二氧化碳气瓶" };
      //this.scene.freshAttributes(AttributesObj1);
      //多个
      if (!AttributesObj) {
        let AttributesObj = {
          cylinderName: "二氧化碳气瓶",
          pumpPower: "可变负压抽采泵",
        };
      }
      this.scene.freshAttributes(AttributesObj);
      return AttributesObj;
    },
  },
});
