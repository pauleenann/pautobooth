<script setup>
    import Layout from '@/components/Layout.vue'
    import choose from '../assets/images/chooselayout.png'
    import layoutA from '../assets/images/layoutA.png'
    import layoutB from '../assets/images/layoutB.png'
    import layoutC from '../assets/images/layoutC.png'
    import layoutD from '../assets/images/layoutD.png'
    import next from '../assets/images/next.png'
    import back from '../assets/images/back.png'
    import { RouterLink } from 'vue-router'

    const layouts = [
        { img: layoutA, name:'Layout A'},
        { img: layoutB, name:'Layout B'},
        { img: layoutC, name:'Layout C'},
        { img: layoutD, name:'Layout D'}
    ]

</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative">
        <!-- back -->
        <RouterLink to="/" class="absolute left-15 top-15 bg-white py-5 px-5 border rounded">
            <img :src="back" alt="">
        </RouterLink>

        <div class="w-[60%] h-[70%] bg-white border flex flex-col items-center justify-center gap-7 px-10 pt-5">
            <!-- instructions -->
            <img :src="choose" class="w-100" alt="">

            <!-- layouts -->
            <div class="w-full flex justify-evenly">
                <div v-for="(layout, index) in layouts" :key="index" >
                    <Layout :layout="layout"/>
                </div>
            </div>

            <!-- next -->
            <div class="flex justify-end w-full">
                <RouterLink to="/photobooth">
                    <img :src="next" alt="">
                </RouterLink>
            </div>
            
        </div>
    </main>
</template>