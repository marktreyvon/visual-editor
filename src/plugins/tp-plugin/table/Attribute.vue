<template>
  <el-collapse v-model="activeNames" accordion>
    <!-- <el-collapse-item title="样式" name="style">
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-input v-model="formData.fontColor"></el-input>
        </el-form-item>

        <el-form-item label="背景颜色">
          <el-input v-modl="formData.bgColor"></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item> -->

    <el-collapse-item title="属性" name="attribute">
      <el-form class="ml-4">
        <el-form-item label="轮播">
          <el-switch v-model="table.carousel"></el-switch>
        </el-form-item>
        <el-form-item label="每页行数">
          <el-input-number v-model="table.plimit" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="背景和边框" name="bgandbd">
      <el-form class="ml-4">
        <el-form-item label="背景颜色">
          <el-color-picker v-model="table.table.bgColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="显示边框">
          <el-switch v-model="table.table.showBorder"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.table.showBorder" label="边框宽度">
          <el-input-number v-model="table.table.borderWidth" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item v-if="table.table.showBorder" label="边框颜色">
          <el-color-picker v-model="table.table.borderColor"></el-color-picker>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="表格边框" name="bgbk">
      <el-form class="ml-4">
        <el-form-item label="显示边框">
          <el-switch v-model="table.border.showBorder"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.border.showBorder" label="边框颜色">
          <el-color-picker v-model="table.border.borderColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="显示斑马纹">
          <el-switch v-model="table.border.showZebrastripe"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.border.showZebrastripe" label="斑马纹颜色">
          <el-color-picker v-model="table.border.zebrastripeColor"></el-color-picker>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="表头" name="btou">
      <el-form class="ml-4">
        <el-form-item label="背景颜色">
          <el-color-picker v-model="table.header.bgColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="table.header.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-color-picker v-model="table.header.fontColor"></el-color-picker>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item name="zdylie">
      <template #title>
        <div class="flex justify-between w-full items-center">
          <span>自定义列</span>
          <el-icon class="header-icon mr-3" @click.stop="addRow">
            <Plus /> +
          </el-icon>
        </div>
      </template>

      <el-collapse class="ml-4">
        <el-collapse-item v-if="table.newRows[0]" v-for="(item, index) in table.newRows" :name="'zdylie-' + index">

          <template #title>
            <div class="flex justify-between w-full items-center">
              <span>{{ item.name }}</span>
              <el-icon class="header-icon mr-3" @click.stop="removeRow(index)">
                <Minus /> -
              </el-icon>
            </div>
          </template>

          <el-form class="ml-4">
            <el-form-item label="是否显示">
              <el-switch v-model="table.newRows[index].show"></el-switch>
            </el-form-item>
            <el-form-item label="字段名">
              <el-input v-model="table.newRows[index].filed"></el-input>
            </el-form-item>
            <el-form-item label="列名">
              <el-input v-model="table.newRows[index].name"></el-input>
            </el-form-item>
            <el-form-item label="文本颜色">
              <el-color-picker v-model="table.newRows[index].color"></el-color-picker>
            </el-form-item>
            <el-form-item label="列宽">
              <el-input v-model="table.newRows[index].width"></el-input>
            </el-form-item>
            <el-form-item label="文本大小">
              <el-input-number v-model="table.newRows[index].size"></el-input-number>
            </el-form-item>
          </el-form>

        </el-collapse-item>
      </el-collapse>
    </el-collapse-item>
  </el-collapse>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { Plus, Minus } from '@element-plus/icons-vue'
import data from "./data"

export default defineComponent({
  data() {
    return {
      activeNames: 'attribute',
      // formData: {
      //   fontSize: 20,
      //   fontColor: '',
      //   bgColor: ''
      // },
      table: {
        carousel: false, //轮播
        plimit: 3, //每页行数
        table: data.table,
        border: data.border,
        header: data.header,
        newRows: data.newRows
      },
    }
  },
  watch: {
    'table.border.showBorder': {
      handler(val) {
        this.table.border.showZebrastripe = false
      },
      immediate: true
    },
    'table.border.borderColor': {
      handler(val) {
        this.table.border.showZebrastripe = false
      },
      immediate: true
    },
    table: {
      handler(val) {
        this.$emit("onChange", {
          style: val
        });
      },
      deep: true
    }
  },
  methods: {
    addRow() {
      this.table.newRows.push({
        show: true,
        filed: 'test',
        name: 'AAA',
        width: 100,
        color: '#000000',
        size: 10
      })
    },
    removeRow(index: number) {
      this.table.newRows.splice(index, 1);
    }
  }
})
</script>

<style lang="scss" scoped>
.header-icon {
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}
</style>