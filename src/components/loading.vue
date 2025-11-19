<template>
    <div 
        :class="weather.loading || weather.error ?'d-flex':hideEl"
        class="align-items-center justify-content-center position-fixed bg-body-tertiary"
        style="width:100vw;height:100dvh;z-index:99999;"
    >
        <span v-if="!weather.error">
            <div class="spinner-border text-body" role="status" style="width: 6rem; height: 6rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
        </span>
        <span class="text-danger" v-if="weather.error">
            {{ weather.error }}
        </span>
    </div>
</template>

<script setup>
    import { watch,ref } from 'vue';
    import { useWeatherStore } from '../stores/weather.js'
    const weather = useWeatherStore();
    const hideEl = ref("")
    watch(()=>weather.loading,(loading)=>{
        if(!loading) {
            hideEl.value = "d-flex box fade-out";
            setTimeout(()=>{
                hideEl.value="d-none";
            },400)
        }
    });
</script>

<style scoped>
    .box {
        opacity: 1;
    }

    .fade-out {
        animation: fadeOut 0.4s ease forwards;
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to   { opacity: 0; }
    }
</style>
