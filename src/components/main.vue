<template>
    <div class="row align-items-center">
        <div class="col-lg-6 order-lg-1 order-2">
            <h1 class="fw-light main-header text-lg-start text-center">{{ weather.current?.temperature || 0 }}°C</h1>
            <h1 class="fw-light text-muted text-lg-start text-center">{{ getWeatherName(weather.current?.weathercode || null)}}</h1>
            <div class="row mt-5">
                <div class="col-6">
                    <span class="d-flex align-items-center gap-2 text-muted"><i class="bi bi-wind"></i>Wind</span>
                    <h2 class="fw-light mt-3">{{ weather.current?.windspeed || 0 }}km/h</h2>
                </div>
                <div class="col-6">
                    <span class="d-flex align-items-center gap-2 text-muted"><i class="bi bi-moisture"></i>Humidity</span>
                    <h2 class="fw-light mt-3">70%</h2>
                </div>
            </div>
        </div>
        <div class="col-lg-6 order-lg-2 order-1 d-flex justify-content-lg-start justify-content-center">
            <img loading="lazy" class="w-100 weather-icon main-img" :src="getWeatherIcon(weather.current?.weathercode || null)" alt=""/>
        </div>
    </div>
    <Hour />
</template>

<script setup>
    import Hour from './hour.vue';
    import { useWeatherStore } from '../stores/weather.js'
    import { getWeatherIcon } from '../utils/getWeatherIcon.js';
    import { getWeatherName } from '../utils/getWeatherName.js';
    const weather = useWeatherStore()
</script>

<style scoped>
    .weather-icon {
        animation: float 2s ease-in-out infinite;
    }

    @keyframes float {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-6px); }
        100% { transform: translateY(0); }
    }
    @media screen and (max-width: 991px) {
        .main-img {
            max-width:250px;width:100%;
        }
        .main-header {
            font-size:5rem
        }
    }
    @media screen and (min-width: 992px) {
        .main-img {
            max-width:350px;width:100%;
        }
        .main-header {
            font-size:7rem
        }
    }
</style>