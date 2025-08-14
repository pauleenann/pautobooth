<script setup>
    import photostrip1 from '../assets/images/photostrip1.png'
    import photostrip2 from '../assets/images/photostrip2.png'
    import watermark from '../assets/images/watermark.png'
    import photobox from '../assets/images/photobox.png'
    import logo from '../assets/images/logo.png'
    import enter from '../assets/images/enter.png'
    import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="w-screen h-screen grid grid-cols-1 lg:grid-cols-[55%_1fr] overflow-hidden relative">
        <!-- modal -->
        <div class="block lg:hidden absolute z-100 inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center p-10">
            <div class="bg-[#ff8fab] text-center p-5 rounded-2xl text-xl font-medium text-white">
                <p>Oopsie! Our mobile version is still getting all dolled up. Check back soon! </p>
                <p class="mt-5">- Pau</p>
            </div>
        </div>


        <!-- 1st grid -->
        <div class="h-full w-full relative border-r bg-[#fefae0]">
            <!-- photo/designs -->
            <img :src="photostrip1" class="w-35 lg:w-60 absolute right-10 top-10 wiggle" alt="">
            <img :src="photostrip2" class="w-35 lg:w-50 absolute left-10 bottom-25 lg:bottom-30 wiggle2" alt="">
            <img :src="watermark" class="absolute inset-0 m-auto " alt="">
            <img :src="photobox" class="absolute w-40 lg:w-65 bottom-3 right-3 lg:bottom-10 lg:right-10" alt="">
        </div>

        <!-- 2nd grid -->
        <div class="hidden lg:block overflow-hidden bg-[#edede9] relative group">
            <!-- logo -->
            <div class="bg-[#F8EDEB] h-25 w-full border-b flex justify-center items-center">
                <img :src="logo" class="w-100" alt="">
            </div>
            <!-- curtain -->
            <div class="w-full h-full flex transition-transform duration-300 group-hover:-translate-x-30">
                <div v-for="(c, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13]" :key="index" class="h-full w-15 border-r bg-[#FEC5BB]"></div>
            </div>
            <!-- enter button -->
            <RouterLink to="/layout" class="absolute bottom-10 right-10 bg-white py-5 px-10 border rounded cursor-pointer hover:translate-y-1">
                <img :src="enter" alt="">
            </RouterLink>
            
        </div>
    </main>
</template>

<style scoped>
    @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
    }

    .wiggle {
    animation: wiggle 3s ease-in-out infinite;
    }

    @keyframes wiggle2 {
    0%, 100% { transform: rotate(3deg); }
    50% { transform: rotate(-3deg); }
    }

    .wiggle2 {
    animation: wiggle2 3s ease-in-out infinite;
    }
</style>