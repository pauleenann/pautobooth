<script setup>
    import heart from '../assets/images/heart.png'

    const props = defineProps({
        layout: Object,
        selectLayout:Function,
        selectedLayout: Object
    })

</script>

<template>
    <div class="flex flex-col items-center gap-3 hover:rotate-2 relative" @click="selectLayout()">
        <img :src="props.layout.img" alt="">
        <p>{{ props.layout.name }}</p>
        <img v-if="props.selectedLayout.name==props.layout.name" :src="heart" class="absolute w-10 -right-5 bottom-10" alt="">
    </div>
</template>