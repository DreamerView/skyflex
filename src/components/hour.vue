<template>
    <div class="bg-body-secondary rounded-5 border p-lg-3 p-2 d-flex gap-lg-3 mt-4 overflow-y-hidden oveflow-x-hidden">
        <div 
            class="hour-block rounded-4 d-flex flex-column align-items-center gap-1 flex-shrink-0"
            v-for="(item, index) in futureHours"
            :key="index"
        >
            <img class="w-50" :src="getWeatherIcon(item.code)" />
            <p class="text-center m-0 text-muted">{{ getCurrentTime(item.date) }}</p>
            <h5 class="text-center m-0 ge">{{ item.temp }}°C</h5>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useWeatherStore } from '../stores/weather.js'
    import { getWeatherIcon } from '../utils/getWeatherIcon.js';
    import { getCurrentTime } from '../utils/getCurrentTime.js';
    import { getCurrentUnixTime } from '../utils/getCurrentUnixTime.js';
    const weather = useWeatherStore()
    const futureHours = computed(() => {
        return weather.hourly?.time?.map((date, index) => ({
            date,
            code: weather.hourly.weathercode[index],
            temp: weather.hourly.temperature_2m[index]
        }))
        .filter(item => getCurrentUnixTime(item.date) >= getCurrentUnixTime()) || []
    })
</script>

<style scoped>
    .hour-block {
        width:100px;
    }
</style>