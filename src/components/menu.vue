<template>
    <div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-5 p-2">
                <div class="modal-header border-0 mb-0">
                    <h1 class="modal-title fs-5" id="menuModalLabel">Menu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column gap-2 pt-0">
                    <p class="m-0"><span class="text-muted">Last updated:</span> {{date}}</p>
                    <hr/>
                    <p class="m-0 text-muted">Choose region</p>
                    <button data-bs-toggle="modal" data-bs-target="#chooseCityModal" class="d-flex gap-2 rounded-4 justify-content-center btn btn-lg border border-2 bg-body-secondary border w-100">
                        <i class="bi bi-geo-alt fs-5 m-0"></i>
                        <span>{{ weather.cityName }}</span>
                    </button>
                    <p class="m-0 text-muted">Change theme mode</p>
                    <button @click="toggleTheme()" :class="theme==='dark'?'text-warning':'text-primary'" class="d-flex gap-2 rounded-4 justify-content-center btn btn-lg border border-2 bg-body-secondary border w-100">
                        <i :class="theme==='dark'?'bi bi-brightness-low':'bi bi-moon-stars'" class="fs-5 m-0"></i>
                        <!--  dark → show Light ; light → show Dark -->
                        <span>{{ theme === 'dark' ? 'Light' : 'Dark' }} theme</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
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