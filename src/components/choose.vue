<template>
    <div class="modal fade" id="chooseCityModal" tabindex="-1" aria-labelledby="chooseCityModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-5 p-2">
                <div class="modal-header border-0 mb-0">
                    <h1 class="modal-title fs-5" id="chooseCityModalLabel">Menu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column gap-2 pt-0">
                    <div class="d-flex gap-2">
                        <input type="text" @input="searchCity"
                            class="form-control flex-fill form-control-lg bg-body-secondary rounded-4 w-100" placeholder="Search" />
                    </div>
                    <div v-for="render in city">
                        <button @click="chooseCity(render?.admin1 || 'Unknown',render?.country || 'Unknown',render?.latitude || null, render?.longitude || null)" class="btn btn-lg w-100 text-start">{{ render?.admin1 || "Unknown" }},
                            {{ render?.country || "Unknown" }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import { useWeatherStore } from '../stores/weather.js';
    import * as bootstrap from 'bootstrap'
    const weather = useWeatherStore()
    const city = ref([])
    let debounceTimer = null;
    const chooseCity = (city,country,lan,lon) => {
        const cityName = `${city}, ${country}`
        const modal = bootstrap.Modal.getInstance(
            document.getElementById('chooseCityModal')
        );
        modal.hide();
        setTimeout(()=>{
            weather.setCoords(cityName,lan,lon);
            city.value = [];
        },250)
    }
    const searchCity = (event) => {
        clearTimeout(debounceTimer)
        const search = event.target.value.trim()
        debounceTimer = setTimeout(async () => {
            if (!search) {
                city.value = []
                return
            }
            try {
                const req = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}`)
                if (!req.ok) throw new Error("Fetching error")
                const res = await req.json()
                console.log(res.results)
                city.value = res.results || []
            } catch (error) {
                console.error(error)
            }
        }, 300) // ← задержка 300мс убирает рывки
    }
</script>