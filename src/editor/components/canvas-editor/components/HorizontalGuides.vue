<template>
    <div class="guides">
        <div style="height:100%;width: 100%" id="horizontal_container"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Guides from "@scena/guides";
let guides: any = null;
onMounted(() => {
    const guidesContainer = <HTMLElement>document.getElementById("horizontal_container");
    guides = new Guides(guidesContainer, {
        type: "horizontal",
        backgroundColor: '#fff',
        textColor: '#000',
        displayDragPos: true,
        textOffset: [20, 10],
        shortLineSize : 5,
        mainLineSize : 7,
        unit: 100,
        rulerStyle: { left: "0px", width: "calc(100% + 20px)", height: "20px" },
    })
    guides.on("changeGuides", e => {
        console.log('guides', e.guides);
    });
    guides.on("clickRuler", (e: any) => {
        console.log('guides', guides.getGuides())
    })

    

    
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
    if (val) {
        let unit = Number((50 / (val * 100)).toFixed(0)) * 100;
        unit = unit || 50;
        console.log('horizontal.props.scaling', guides)
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