import { defineStore } from 'pinia'
export const useThreeDDeviceData = defineStore('threeDDeviceData', {
    state: () => {
        return { threeDDeviceData: [] }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        pushData(nodeId,timer,v) {
            if(nodeId){
            let NodeIn={}
              this.threeDDeviceData.forEach((ele,index)=>{
                   if(ele.nodeId === nodeId){
                       NodeIn.isNodeIn=true
                       NodeIn.theIndex=index
                   }

                });

               if(NodeIn?.isNodeIn){

                     let deviceIn =    {}
                   console.log(this.threeDDeviceData[NodeIn.theIndex])
                       this.threeDDeviceData[NodeIn.theIndex].deviceData.forEach((ele,index)=>{
                           if(ele.deviceId === v.deviceId){
                               deviceIn.isDeviceIn=true
                               deviceIn.theIndex=index
                           }

                   });
                   if(deviceIn?.isDeviceIn){
                       this.threeDDeviceData[NodeIn.theIndex].deviceData[deviceIn.theIndex]=v
                   }else{
                       this.threeDDeviceData[NodeIn.theIndex].deviceData=[v,...this.threeDDeviceData[NodeIn.theIndex].deviceData]
                   }
               }else{
                   this.threeDDeviceData=[{
                       nodeId:nodeId,
                       timer:timer,
                       deviceData:[v]
                   },...this.threeDDeviceData]
               }

            }
        },
       clearData(nodeId) {
           this.threeDDeviceData=this.threeDDeviceData.filter(i=> {
                return i.nodeId!==nodeId
            })
        },
    },
})