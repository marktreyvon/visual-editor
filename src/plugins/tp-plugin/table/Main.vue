<template>
  <div :id="'table_' + id" lass="table-wrap" style="height: 100%">
    <el-table style="height: 100%;" width="100%" fit :data="orgNameData" :cellStyle="cellStyle"
      :header-cell-style="headerCellStyle" :cell-class-name="tableCellClassName" ref="sdangerTable" :style="tableStyle">

      <template v-if="newRows" v-for="(item, index) in newRows">
        <el-table-column v-if="item.show" width="auto" :prop="item.filed" :label="item.name">

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
    id: {
      type: String,
      default: () => {
        return "table";
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
      tableHeight: 39 + (data.plimit * 45),
      orgNameData: data.orgNameData,
      newRows: data.newRows,
      tableBodyHeight: 0,
      rowHeight: 45
    }
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
        console.log("table.Main.style", val);
        if (JSON.stringify(val) !== "{}") {
          this.tableChange(val)
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.getTableBodyHeight();
  },
  methods: {
    tableChange(_data: any) {
      console.log('---table.tableChange--', _data)
      //新数据
      this.newRows = _data.newRows || data.newRows;
      //表格外边框
      this.tableStyle.background = _data.table?.bgColor || data.table.bgColor;
      if (_data.table?.showBorder) {
        this.tableStyle.border = (_data.table?.borderWidth || data.table.borderWidth) + 'px solid ' + (_data.table?.borderColor || data.table.borderColor);
      } else {
        this.tableStyle.border = 'none'
      }

      //表格头部
      this.headerCellStyle.background = _data.header?.bgColor || data.header.bgColor;
      this.headerCellStyle.color = _data.header?.fontColor || data.header.fontColor
      this.headerCellStyle.fontSize = (_data.header?.fontSize || data.header.fontSize) + 'px' 

      //表格内容
      this.cellStyle.background = _data.table?.bgColor || data.table.bgColor;
      if (_data.border?.showBorder) {
        this.headerCellStyle.border = "1px solid " + (_data.border?.borderColor || data.border.borderColor)
        this.cellStyle.border = "1px solid " + (_data.border?.borderColor || data.border.borderColor)
      } else {
        this.headerCellStyle.border = 'none'
        this.cellStyle.border = 'none'
      }

      //滚动
      if (_data.carousel) {
        this.startScroll();
      } else {
        this.stopScroll();
      }

     
      //显示行数
      this.$nextTick(() => {
        const dom = <HTMLElement>document.getElementById("table_" + this.id);
        const tableBody = <HTMLElement>dom.getElementsByClassName("el-table__body-wrapper")[0];
        const tableRows = <any>dom.getElementsByClassName("el-table__row"); 
          console.log('tableRows', tableRows)
        new ResizeObserver(entries => {
          this.tableBodyHeight = entries[0].contentRect.height;
          const rowHeihgt = this.tableBodyHeight / (_data.plimit || data.plimit);
          for (let i in tableRows) {
            const tableRow: any = tableRows[i];
            console.log('tableRow', i, tableRow.style)
            if (tableRow.style) {
              tableRow.style.height = rowHeihgt + 'px'
              console.log('tableRow', i, rowHeihgt + 'px')
            }
          }
        }).observe(tableBody);
      })

      //斑马线
      console.log('---data.border.showZebrastripe--', _data.border?.showZebrastripe)
      let stripes = document.getElementsByClassName('stripe');
      for (let i in stripes) {
        const stripe: any = stripes[i];
        let istyle = stripe.style;
        if (istyle) {
          if (_data.border?.showZebrastripe) {
            istyle.background = _data.border?.zebrastripeColor || data.border.zebrastripeColor
          } else {
            istyle.background = _data.table?.bgColor || data.table.bgColor
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
    /**
     * 获取表格内容区域高度
     */
    getTableBodyHeight() {
      const resizeObserver = new ResizeObserver(entries => {
        this.tableBodyHeight = entries[0].contentRect.height;
        console.log('---tableBodyHeight--', this.tableBodyHeight)
      })
      this.$nextTick(() => {
        const dom = <HTMLElement>document.getElementById("table_" + this.id);
        const tableBody = <HTMLElement>dom.getElementsByClassName("el-table__body-wrapper")[0];
        resizeObserver.observe(tableBody);
      })
    }
  }
})

</script>

<style lang="scss" >
// td.stripe {
//   background: #f00606 !important;
// }

.el-table__header{margin:0 auto;}
</style>