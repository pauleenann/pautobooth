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
    import { usePhotoStore } from '@/stores/photos'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const selectedLayout = ref({})
    const photosStore = usePhotoStore()
    const router = useRouter()

    const layouts = [
        { img: layoutA, name:'Layout A', no: 3},
        { img: layoutB, name:'Layout B', no: 3},
        { img: layoutC, name:'Layout C', no: 2},
        { img: layoutD, name:'Layout D', no: 4}
    ]

    const proceed = ()=>{
        photosStore.layout = selectedLayout.value
        router.push('/photobooth')
    }

    console.log(selectedLayout.value)
</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative">
        <!-- back -->
        <RouterLink to="/" class="absolute left-15 top-15 bg-white py-5 px-5 border rounded">
            <img :src="back" alt="">
        </RouterLink>

        <div class="w-[60%] h-[70%] bg-white border flex flex-col items-center justify-center gap-7 px-10 pt-5">
            <!-- instructions -->
            <div class="flex flex-col items-center mt-1">
                <img :src="choose" class="w-100" alt="">
                <p class="text-sm">Note: Pretty please hold your pose after each snap. Thank you, gorgeous!</p>
            </div>
            

            <!-- layouts -->
            <div class="w-full flex justify-evenly">
                <div v-for="(layout, index) in layouts" :key="index" >
                    <Layout 
                        :layout="layout" 
                        :selectLayout="()=>{
                            selectedLayout=layout;
                            console.log(selectedLayout)
                        }"
                        :selectedLayout="selectedLayout"
                    />
                </div>
            </div>

            <!-- next -->
            <div class="flex justify-end w-full">
                <button @click="proceed" class="hover:translate-y-1" :disabled="!selectedLayout">
                    <img :src="next" alt="">
                </button>
            </div>
            
        </div>
    </main>
</template>