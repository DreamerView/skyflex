<template>
    <Menu />
    <header class="d-flex flex-wrap align-items-center justify-content-center gap-5 mt-2 opacity-75">
        <button class="btn d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#menuModal">
            <i class="bi bi-list fs-5 m-0"></i>
            <span>Open menu</span>
        </button>
    </header>
</template>

<script setup>
    import Menu from './menu.vue';
</script>