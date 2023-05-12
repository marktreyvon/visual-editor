import { defineComponent } from 'vue';

export default defineComponent({
    name: "BaseAttr",
    setup() {

        return () => ( 
            <div>
                <el-row gutter={10}>
                    <el-col span={6}>名称：</el-col>
                    <el-col span={18}>
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row gutter={10}>
                    <el-col span={6}>层级：</el-col>
                    <el-col span={18}>
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row gutter={10}>
                    <el-col span={6}>尺寸：</el-col>
                    <el-col span={9}>
                        <el-input></el-input>
                    </el-col>
                    <el-col span={9}>
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row gutter={10}>
                    <el-col span={6}>对齐：</el-col>
                    <el-col span={18}></el-col>
                </el-row>
            </div> 
        )
    }
});