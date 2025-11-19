<template>
    <header class="d-flex align-items-center justify-content-center gap-4 mt-2">
        <button class="btn d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt fs-5"></i>
            <span>{{ weather.cityName }}</span>
        </button>
        <p class="text-muted m-0">({{date}})</p>
    </header>
</template>

<script setup>
    import { useWeatherStore } from '../stores/weather.js'
    const weather = useWeatherStore()
    const date = new Date().toLocaleString();
</script>