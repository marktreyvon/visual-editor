<template>
    <div class="guides">
        <div style="height:100%;width: 100%" id="vertical_container"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Guides from "@scena/guides";

let guides: any = null;
onMounted(() => {
    const guidesContainer = <HTMLElement>document.getElementById("vertical_container");
    guides = new Guides(guidesContainer, {
        type: "vertical",
        backgroundColor: '#fff',
        textColor: '#000',
        textOffset: [10, 20],
        displayDragPos: true,
        shortLineSize : 5,
        mainLineSize : 7,
        unit: 100,
        rulerStyle: { top: "20px", width: "20px", height: "calc(100% + 20px)" },
    })
    guides.on("changeGuides", e => {
        console.log(e.guides);
    });

    
    let scrollX = 0;
    let scrollY = 0;
    window.addEventListener("resize", () => {
        guides.resize();
    });

    window.addEventListener("wheel", e => {
        scrollX += e.deltaX;
        scrollY += e.deltaY;

        guides.scrollGuides(scrollY);
        guides.scroll(scrollX);
    });
})

const props = defineProps<{ scaling: number }>();
watch(() => props.scaling, (val: any) => {
    console.log('horizontal.props.scaling', val)
    if (val) {
        let unit = Number((50 / (val * 100)).toFixed(0)) * 100;
        unit = unit || 50;
        guides.setState({ unit, zoom:val })
    }
})

</script>

<style lang="scss" scoped>
.guides {
    position: absolute;
    width: 100%;
}
</style>