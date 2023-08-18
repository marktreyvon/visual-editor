import { defineStore } from 'pinia'
export const useIsEditEdgeMode = defineStore('isEditEdgeMode', {
    state: () => {
        return { isEditEdgeMode: false }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.isEditEdgeMode=!this.isEditEdgeMode
        },
        setFalse() {
            this.isEditEdgeMode=false
        },
    },
})