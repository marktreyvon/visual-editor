<template>
  <div class="table-wrap">
    <el-table :height="tableHeight" width="100%" :data="orgNameData" :cellStyle="cellStyle"
      :header-cell-style="headerCellStyle" :cell-class-name="tableCellClassName" ref="sdangerTable" :style="tableStyle">

      <!-- <el-table-column prop="seqNo" label="seqNo">
      </el-table-column>
      <el-table-column prop="deviceName" label="deviceName">
      </el-table-column>
      <el-table-column prop="propA" label="propA">
      </el-table-column>
      <el-table-column prop="propB" label="propB">
      </el-table-column>
      <el-table-column prop="status" label="status">
      </el-table-column> -->

      <template v-if="newRows" v-for="(item, index) in newRows">
        <el-table-column v-if="item.show" :width="item.width" :prop="item.filed" :label="item.name">

          <template #default="scope">
            <span :style="'color:' + item.color + '; font-size:' + item.size + ';'">{{ scope.row[item.filed] }}</span>
          </template>
        </el-table-column>
      </template>

    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import data from "./data"

export default defineComponent({
  components: {
  },
  props: {
    value: {
      type: [Object, String, Number],
      default: () => {
        return {
          table: data.table,
          border: data.border,
          header: data.header,
          newRows: data.newRows
        };
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
      tableStyle: { background: '#ffffff', border: 'none', margin: "1px" },
      cellStyle: { color: "#000000", background: data.table.bgColor, border: "none", height: '45px' },
      headerCellStyle: { background: data.header.bgColor, color: data.header.fontColor, fontSize: data.header.fontSize + 'px', border: "none" },
      interval: ref<any>(null),
      tableHeight: 200,
      orgNameData: data.orgNameData,
      newRows: data.newRows,
    }
  },
  mounted() {
  },
  watch: {
    value: {
      handler(val) {
        console.log("table.Main.value", val);
        try {
            let obj = JSON.parse(val);
            console.log("table.Main.value.obj", obj);

            this.orgNameData = obj;
        } catch(e) {
          console.log('传入的数据不是JSON格式');
        }
      },
      deep: true
    },
    style: {
      handler(val) {
        console.log("Main.style", val);
        this.tableChange(val)
      },
      deep: true
    }
  },
  methods: {
    tableChange(data: any) {

      //新数据
      this.newRows = data.newRows;

      //表格外边框
      this.tableStyle.background = data.table.bgColor
      if (data.table.showBorder) {
        this.tableStyle.border = data.table.borderWidth + 'px solid ' + data.table.borderColor;
      } else {
        this.tableStyle.border = 'none'
      }

      //表格头部
      this.headerCellStyle.background = data.header.bgColor
      this.headerCellStyle.color = data.header.fontColor
      this.headerCellStyle.fontSize = data.header.fontSize + 'px'

      //表格内容
      this.cellStyle.background = data.table.bgColor;
      if (data.border.showBorder) {
        this.headerCellStyle.border = "1px solid " + data.border.borderColor
        this.cellStyle.border = "1px solid " + data.border.borderColor
      } else {
        this.headerCellStyle.border = 'none'
        this.cellStyle.border = 'none'
      }

      //滚动
      if (data.carousel) {
        this.startScroll();
      } else {
        this.stopScroll();
      }

      //显示行数
      const table: any = this.$refs['sdangerTable'];

      this.tableHeight = table?.$refs.headerWrapper.clientHeight + data.plimit * 45

      //斑马线
      console.log('---data.border.showZebrastripe--', data.border.showZebrastripe)
      let stripes = document.getElementsByClassName('stripe');
      for (let i in stripes) {
        const stripe: any = stripes[i];
        let istyle = stripe.style;
        if (istyle) {
          if (data.border.showZebrastripe) {
            istyle.background = data.border.zebrastripeColor
          } else {
            istyle.background = data.table.bgColor
          }
        }
      }
    },

    tableCellClassName(data: any) {
      if (data.rowIndex % 2 == 0) {
        return 'stripe';
      }
    },

    stopScroll() {
      // const divData = this.$refs['sdangerTable'].$refs.bodyWrapper.getElementsByClassName('el-scrollbar__wrap')[0]
      // divData.scrollTop = 0;
      clearInterval(this.interval)
    },

    //滚动方法 (主要代码) 
    startScroll() {
      clearInterval(this.interval)
      const table: any = this.$refs['sdangerTable'];
      const divData = table?.$refs.bodyWrapper.getElementsByClassName('el-scrollbar__wrap')[0]
      this.interval = setInterval(() => {
        divData.scrollTop += 1
        if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
          divData.scrollTop = 0
        }
      }, 100)
    },
  }
})

</script>

<style lang="scss" >
// td.stripe {
//   background: #f00606 !important;
// }

.el-table__header{margin:0 auto;}
</style>