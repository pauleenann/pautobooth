<script setup>
    import Camera from "simple-vue-camera";
    import { reactive, ref } from 'vue'
    import start from '../assets/images/start.png'
    import one from '../assets/images/1.png'
    import two from '../assets/images/2.png'
    import three from '../assets/images/3.png'
    import done from '../assets/images/done.png'
    import proceed from '../assets/images/proceed.png'
    import { RouterLink } from "vue-router";

    const camera = ref(null)
    const shots = ref(8)
    const timerImg = ref(['',one,two,three])
    const timer = ref(3)
    const isStart = ref(false)
    const photos = reactive([])
    

    // Use camera reference to call functions
    const snapshot = async () => {
        const blob = await camera.value?.snapshot();

        // To show the screenshot with an image tag, create a url
        photos.push(URL.createObjectURL(blob));
    }

    const handleStart = ()=>{
        if(shots.value==0){
            return
        }

        timer.value = 3
        isStart.value = true

        const timerId = setInterval(()=>{
            timer.value--

            if(timer.value<0){
                clearInterval(timerId)
                snapshot()
                shots.value--
                // recursion 
                handleStart()
            }
        },1000)
       
    }
    console.log(shots.value)
</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative flex flex-col gap-3">
        <div v-if="shots!=0" class="w-[60%] h-[70%] bg-white border flex flex-col items-center justify-center gap-7 overflow-hidden">
            <Camera :resolution="{ width: 600, height: 300 }" ref="camera" autoplay>
                <div class="absolute inset-0 m-auto flex items-center justify-center">
                    <button v-if="!isStart" class=" bg-[#FEC5BB] p-5 rounded border rounded" @click="handleStart" >
                            <img :src="start" alt="">
                    </button>  
                    <div v-else-if="isStart&&timer>0" class=" bg-[#FEC5BB]/30 w-50 h-50 p-5 rounded-circle text-white rounded-full flex items-center justify-center">
                        <img :src="timerImg[timer]" alt="">
                    </div>
                    <div v-else class="bg-white w-full h-full"></div>
                </div>
            </Camera>
        </div>
        <div v-else class="w-[60%] h-[70%] bg-white border flex flex-col items-center justify-center gap-7 overflow-hidden">
            <img :src="done" alt="">
            <RouterLink class="bg-[#FEC5BB] p-5 rounded border rounded cursor-pointer hover:translate-y-1">
                <img :src="proceed" alt="">
            </RouterLink>
        </div>
        <p v-if="shots!=0" class="text-black text-stroke absolute bottom-20">You have {{shots}}/8 shots left</p>
        <!-- <div v-for="(photo,index) in photos" :key="index">
            <img :src="photo" alt="">
        </div> -->
    </main>
</template>
