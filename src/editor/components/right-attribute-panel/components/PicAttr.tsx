import { Component, defineComponent } from "vue";
export const getPicAttrComponent = (): Component => {
    return defineComponent({
        props: {
            data: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                activeNames: ['style'],
                formData: {
                    backgroundColor: undefined,
                    fit: "contain"
                },
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
            }
        },
        mounted() {
            if (this.data) {
                const jsonStr = JSON.stringify(this.data);
                if (jsonStr === '{}') return;
                const jsonObj = JSON.parse(jsonStr);
                this.formData = jsonObj;
            }
        },
        watch: {
            formData: {
                handler: function (val: any, oldVal: any) {
                    this.$emit("onChange", { style: val})
                },
                deep: true
            }
        },
        render() {
            return (
                <el-collapse v-model={this.activeNames}>
                    <el-collapse-item title="样式" name="style">
                        <el-form  label-width="80px" label-position="left">

                            <el-form-item label="背景颜色">
                                <el-color-picker  v-model={this.formData.backgroundColor}/>
                            </el-form-item>

                            <el-form-item label="适应类型">
                                <el-select v-model={this.formData.fit}>
                                    {
                                        this.fits.map((item: string) => {
                                            return <el-option label={item} value={item} key={item} />
                                        })
                                    }
                                </el-select>
                            </el-form-item>    

                        </el-form>
                    </el-collapse-item>
                </el-collapse>
            )
        }
    })
}