<script setup>
    const props = defineProps({
        layout: Object
    })
</script>

<template>
    <div class="flex flex-col items-center gap-3 hover:rotate-2">
        <img :src="props.layout.img" alt="">
        <p>{{ props.layout.name }}</p>
    </div>
</template>