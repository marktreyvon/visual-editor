import { defineStore } from 'pinia'
export const useIs3D = defineStore('is3D', {
    state: () => {
        return { is3D: false }
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        setTrue() {
            this.is3D=true
        },
        setFalse() {
            this.is3D=false
        },
    },
})