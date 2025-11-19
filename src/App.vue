<template>
    <Loading />
    <Header />
    <div class="container mt-sm-4">
        <div class="row g-4">
            <div class="col-xl-9 col-lg-8 col-md-6">
                <Main />
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
                <Week />
            </div>
        </div>
    </div>
    <footer class="my-4 d-flex gap-1 flex-column align-items-center justify-content-center opacity-75">
        <p class="m-0">Built with ❤️ by <a href="https://temirkhan.vercel.app">Temirkhan</a></p>
        <p class="m-0">Project at <a href="https://github.com/DreamerView/skyflex">Github</a></p>
    </footer>
</template>

<script setup>
    import Loading from './components/loading.vue';
    import Header from './components/header.vue';
    import Main from './components/main.vue';
    import Week from './components/week.vue';
    import { useWeatherStore } from './stores/weather.js'
    const weather = useWeatherStore()

    weather.detectLocation().then(()=>{
        console.log(weather.current)
    })
</script>

