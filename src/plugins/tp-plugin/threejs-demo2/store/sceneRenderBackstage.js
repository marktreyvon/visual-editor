import { defineStore } from 'pinia';;
import { shallowRef } from 'vue'
//import { SceneBackstage } from '@/engines/lib/main'
import { SceneBackstage } from '../scene/lib/engine.js';

export const useScene4 = defineStore('scene4', {
	state: () => {
		return {
			scene: shallowRef(null),
		};
	},
	actions: {
		//功能：创建SceneRender
		createSceneRender(containerDiv) {
			this.scene = new SceneBackstage(containerDiv);
		},
		//功能：修改静态绑定的数据，调用案例
		freshAttributes(AttributesObj) {
			//单个

			let AttributesObj1 = {cylinderName: "二氧化碳气瓶"};
			//this.scene.freshAttributes(AttributesObj1);

			//多个
			if(!AttributesObj){
				let AttributesObj = {
					cylinderName: "二氧化碳气瓶",
					pumpPower:'可变负压抽采泵'
				}
			}
			this.scene.freshAttributes(AttributesObj);
			return AttributesObj
		},
		//功能：动态数据更新，调用案例
		freshSensors(sensorValue) {
			//可以更新单个，或者同时更新一组设备数据
			//设备对应三维中的从左向右进行ID匹配
			if(!sensorValue){
				let sensorValue = [
					{sensorId: 1, gatherTime: '2023-06-01 15:48:08', gatherValue: 98.71},
					{sensorId: 2, gatherTime: '2023-06-01 15:48:08', gatherValue: 1.83},
					{sensorId: 5, gatherTime: '2023-06-01 15:48:08', gatherValue: 84.96},
					{sensorId: 6, gatherTime: '2023-06-01 15:48:08', gatherValue: 176.41},
					{sensorId: 7, gatherTime: '2023-06-01 15:48:08', gatherValue: 16.4}
				];
			}

			this.scene.freshSensors(sensorValue);
			return sensorValue
		},
	},
});
