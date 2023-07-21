import { defineStore } from 'pinia'
export const useIs3DMode = defineStore('is3DMode', {
    state: () => {
        return { is3DMode: false }
    },
    actions: {
        setTrue() {
            this.is3DMode=true
        },
        setFalse() {
            this.is3DMode=false
        },
    },
})