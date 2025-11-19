<template>
    <header class="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-2 opacity-75">
        <button class="btn d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt fs-5 m-0"></i>
            <span>{{ weather.cityName }}</span>
        </button>
        <button class="btn d-flex align-items-center gap-2">
            <i class="bi bi-calendar2 fs-5 m-0"></i>
            <span>{{date}}</span>
        </button>
        <button :class="theme==='dark'?'text-primary':'text-warning'" class="btn d-flex align-items-center gap-2" @click="toggleTheme()">
            <i :class="theme==='dark'?'bi bi-moon-stars':'bi bi-brightness-low'" class="fs-5 m-0"></i>
            <span>{{theme==="dark"?"Dark":"Light"}} theme</span>
        </button>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { useWeatherStore } from '../stores/weather.js'
    const theme = ref("light");
    const weather = useWeatherStore()
    const date = new Date().toLocaleString();
    const toggleTheme = () => {
        const current = document.body.getAttribute("data-bs-theme");
        const newTheme = current === "dark" ? "light" : "dark";

        document.body.setAttribute("data-bs-theme", newTheme);
        theme.value = newTheme; // <-- обязательно обновляем реактивное состояние
    };

</script>