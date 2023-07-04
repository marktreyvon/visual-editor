<template>
    <div class="flex min-h-full justify-center flex-col px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <el-form ref="ruleFormRef" label-position="top" :rules="rules" :model="formData">
                <el-form-item label="用户名" prop="username">
                    <el-input size="large" v-model="formData.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input size="large" show-password v-model="formData.password"></el-input>
                </el-form-item>

                <div>
                    <el-button type="primary" size="large" class="flex w-full justify-center" v-loading="isLoggining"
                        @click="submitForm(ruleFormRef)">登录</el-button>
                </div>
            </el-form>
            <p class="mt-10 mb-40 text-center text-sm text-gray-500">
                没有账号？
                <a href="http://r.thingspanel.cn/login?register=true" target="_blank" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">创建一个账号</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import { MarketApi } from '@/api/market'
import { useMarketStore } from "@/store"
const props = defineProps<{
    submit: () => void
}>();

const ruleFormRef = ref<FormInstance>()

const isLoggining = ref(false);
const formData = reactive({
    username: '17398467065',
    password: '123456'
});
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 40, message: '长度必须在2-40个字符之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 40, message: '长度必须在6到40个字符之间', trigger: 'blur' },
    ]
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    isLoggining.value = true;
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            MarketApi.getToken(formData)
                .then(res => {
                    if (res.status === 201) {
                        isLoggining.value = false;
                        useMarketStore().saveToken(res.data.token);
                        props.submit();
                    }
                })
                .catch(err => {
                    isLoggining.value = false;
                    console.log(err)
                })
        } else {
            isLoggining.value = false;
            return false
        }
    })
}
</script>

<style lang="scss" scoped></style>