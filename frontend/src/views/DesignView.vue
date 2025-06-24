<script setup>
    import LayoutA from '@/components/LayoutA.vue';
    import LayoutB from '@/components/LayoutB.vue';
    import LayoutC from '@/components/LayoutC.vue';
    import LayoutD from '@/components/LayoutD.vue';
    import bg1 from '../assets/images/bg1.jpg'
    import bg2 from '../assets/images/bg2.jpg'
    import bg3 from '../assets/images/bg3.jpg'
    import bg4 from '../assets/images/bg4.jpg'
    import bg5 from '../assets/images/bg5.jpg'
    import bg6 from '../assets/images/bg6.jpg'
    import bg7 from '../assets/images/bg7.jpg'
    import { usePhotoStore } from '@/stores/photos';
    import next from '../assets/images/next.png'
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const photoStore = usePhotoStore()
    const layout = photoStore.layout.name
    const colors = [
        'bg-[#F8EDEB]',
        'bg-[#FAEDCD]',
        'bg-[#FBC4AB]',
        'bg-[#F5F8FF]',
        'bg-[#D9D9D9]',
        'bg-[#ffd6a5]',
        'bg-[#fdffb6]',
        'bg-[#caffbf]',
        'bg-[#d8e2dc]',
        'bg-[#e5b3fe]',
        'bg-[#fb6f92]',
        'bg-[#ffffff]',
    ]
    const backgrounds = [
        bg1, bg2,
        bg3, bg4,
        bg5, bg6,
        bg7
    ]
    const selectedColor = ref('')
    const selectedBg = ref('')

    const proceed = ()=>{
        photoStore.selectedColor = selectedColor.value
        photoStore.selectedBg = selectedBg.value
        router.push('/download')
    }

</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative flex flex-col gap-3">
        <div class="w-[60%] h-[70%] bg-white border overflow-hidden grid grid-cols-[1fr_60%]">
            <!-- layout -->
            <div class="flex items-center justify-center">
                <LayoutA v-if="layout==='Layout A'" :selected="photoStore.selectedPhotos" :color="selectedColor" :bg="selectedBg"/>
                <LayoutB v-if="layout==='Layout B'" :selected="photoStore.selectedPhotos" :color="selectedColor" :bg="selectedBg"/>
                <LayoutC v-if="layout==='Layout C'" :selected="photoStore.selectedPhotos" :color="selectedColor" :bg="selectedBg"/>
                <LayoutD v-if="layout==='Layout D'" :selected="photoStore.selectedPhotos" :color="selectedColor" :bg="selectedBg"/>
            </div>
            <!-- styles -->
            <div class="p-5 flex flex-col gap-2 relative">
                <p class="text-2xl mt-3 mb-3">Customize your strip</p>
                <!-- colors -->
                <div class="flex flex-col gap-2">
                    <p>Colors</p>
                    <div  class="grid grid-cols-6 gap-2">
                        <button 
                            v-for="(color,index) in colors" 
                            :key="index" 
                            :class="[selectedColor==color&&'border-[#fe5d9f]', color, 'w-20', 'h-20', 'rounded', 'border', 'cursor-pointer']"
                            @click="selectedColor=color"
                        >
                        </button>
                    </div>
                </div>
                <!-- bgs -->
                <div class="flex flex-col gap-2">
                    <p>Background Styles</p>
                    <div  class="grid grid-cols-6 gap-2">
                        <button 
                            v-for="(bg,index) in backgrounds" 
                            :key="index" 
                            :class="[selectedBg==bg&&'border-[#fe5d9f]', color, 'w-20', 'h-20', 'rounded', 'border', 'cursor-pointer']"
                            @click="selectedBg=bg"
                        >
                            <img :src="bg" alt="" class="object-cover w-full h-full">
                        </button>
                    </div>
                </div>
                <!-- next -->
                <button @click="proceed" class="absolute bottom-10 right-10 cursor-pointer hover:translate-y-1" >
                    <img :src="next" alt="">
                </button>
            </div>
        </div>
    </main>
</template>
