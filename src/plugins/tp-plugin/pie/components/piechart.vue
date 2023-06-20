<template>
    <div 
        :id="id" style="width:100%;height:100%;" :style="{
        backgroundColor: background.color || background.color,
        opacity: background.slidingblock as number / 10,
        borderRadius: background.bordereduse + '%',
        border: `${background.borderSize + 'px'} solid ${bgColorAndOpicity}`,
    }">
    <h1  class="header" :style="{fontSize: background.sizeborder + 'px' ,color:background.color1}" >{{ background.header }}</h1>
    </div>
</template>
  
<script lang="ts">
import { Pie } from '@antv/g2plot';
import { defineComponent } from "vue";
import { randomString } from "@/utils"
import { staticData }  from "../default"
// import { nextTick } from 'process';
// import { tsThisType } from '@babel/types';
// import { toArray } from 'lodash';
export default defineComponent({
    name: "Gauge",
    components: {
        Pie
    },
    props: {
        id: {
            type: String,
            required: true,
            default: "gauge"
        },
        formData: {
            type: Object,
            default: () => {
                return {};
            },
        },
        formData1: {
            type: [Array, Object, String, Number] ,
            default: () => {
                return {};
            },
        },
    },

    data() {
        return {
            id: "container_piechart_" + randomString(10),
            pie: null,
            border: "border:5px solid red",
            background: {
                pointerShow:true,
                color1:'',
                sizeborder:'',
                bordereduse: 0,
                slidingblock: 10,
                headline: '',
                borderSize: 0,
                borderAlpha: '',
                reduce: '',
                color: '',
                bgColor: '',
                borderreudce: "",
                beij: '',
                dropList: [],
                textPosition: '',
                header:'',
            },
            bgColorAndOpicity: '',
            keydata:{
                value: "",
                options:['静态数据','动态数据','设备数据'],
                selectedValue:'',
                inputText: staticData
            },
          
        }
    },

    mounted() {
        (this.pie as any) = new Pie(this.id, {
            appendPadding: 10,
            data:this.keydata.inputText,
            angleField: 'value',
            colorField: 'type',
            radius: 0.9,
            legend: {
                position: this.background.textPosition as any,
                visible: this.background.pointerShow,
                itemName: {
                    style: {
                        fill: '#5b8ff9',
                    }
                },
            },
            label: {
                type: 'inner',
                offset: '-30%',
                content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                style: {
                    fontSize: 14,
                    textAlign: 'center',
                    
                },
                
            },
            interactions: [{ type: 'element-active' }],
        });
        (this.pie as any).render()
    },

    watch: {
        formData: {
            handler(val) {
                function hexToRgba(hex: any, alpha: any) {
                    if (!hex) return "";
                    var r = parseInt(hex.slice(1, 3), 16);
                    var g = parseInt(hex.slice(3, 5), 16);
                    var b = parseInt(hex.slice(5, 7), 16);
                    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
                }
                this.background = val;
                this.bgColorAndOpicity = hexToRgba(this.background.bgColor, this.background.beij as any / 10);
                (this.pie as any).options.legend.position = this.background.textPosition;
                (this.pie as any).options.legend.visible = this.background.pointerShow;
                (this.pie as any).render()
            },
            deep: true,
        },  
        formData1: {
            handler(val) {
                if (JSON.stringify(val) === "{}" || val.length === 0) return;
                let arr2: string | any[] = []
                let arr = Array.from(val)
                let jsonStr = arr.join("").replace(/\s+/g, "");
                console.log('====pie3', eval(jsonStr))
                arr2.push(eval(jsonStr))
                if(jsonStr.length > 1 ){
                    (this.pie as any).options.data = arr2[0];
                    (this.pie as any).render()
                }
                
            },
            deep: true,
        }
    }
})

</script>

  
<style lang="scss" scoped>
.header{
    width: 50px;
    position: absolute;
    left: 0;
    top: 10px;
}
</style>
