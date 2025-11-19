<template>
    <div class="bg-body-secondary rounded-5 border px-3 py-4 d-flex flex-column gap-3">

        <div 
            class="row"
            v-for="(item, index) in dailyPrepared"
            :key="index"
            :class="item.isToday ? 'border-start border-warning border-3' : ''"
        >
            <div class="col-3">
                <img loading="lazy" class="w-100" :src="item.icon" alt="">
            </div>

            <div class="col-5 d-flex flex-column justify-content-center">
                <h6 class="m-0" :class="item.isToday ? 'fw-bold' : ''">{{ item.day }}</h6>
                <p class="text-truncate text-muted m-0 mt-2" style="font-size:0.8rem;">
                    {{ item.name }}
                </p>
            </div>

            <div class="col-4 text-center d-flex flex-column justify-content-lg-start justify-content-center">
                <h5 class="text-center m-0">{{ item.max }}°C</h5>
            </div>
        </div>

    </div>
</template>


<script setup>
import { computed } from 'vue'
import { useWeatherStore } from '../stores/weather.js'
import { getWeatherIcon } from '../utils/getWeatherIcon.js'
import { getWeatherName } from '../utils/getWeatherName.js'
import { getCurrentDay } from '../utils/getCurrentDay.js'

const weather = useWeatherStore()

const dailyPrepared = computed(() => {
    if (!weather.daily?.time) return []

    return weather.daily.time.map((date, index) => ({
        date,
        code: weather.daily.weathercode[index],
        max: weather.daily.temperature_2m_max[index],
        min: weather.daily.temperature_2m_min?.[index],
        icon: getWeatherIcon(weather.daily.weathercode[index]),
        name: getWeatherName(weather.daily.weathercode[index]),
        day: index === 0 ? 'Today' : getCurrentDay(date),
        isToday: index === 0
    }))
})
</script>
