<template>
    <div class="myVideo">
        <VideoJs :videoSrc="style.videoSrc" :autoPlay="style.autoPlay" />
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, watch } from "vue";
import VideoJs from "./components/Video.vue";
import { defaultOption } from "./default";
const data = reactive({
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
});
const props = withDefaults(defineProps<{
    style?: any;
}>(), {
    style: { ...defaultOption }
});

watch(() => props.style, (val) => {
    console.log('video.Main.style', val)
});

</script>
<style scoped lang="scss">
.myVideo {
    width: 100%;
    height: 100%;
}
</style>
  