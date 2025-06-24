<script setup>
    import { usePhotoStore } from '@/stores/photos';
    import LayoutA from '@/components/LayoutA.vue';
    import x from '../assets/images/x.png'
    import next from '../assets/images/next.png'
    import { ref } from 'vue';
    import LayoutB from '@/components/LayoutB.vue';
    import LayoutC from '@/components/LayoutC.vue';
    import LayoutD from '@/components/LayoutD.vue';
    import { useRouter } from 'vue-router'

    const photoStore = usePhotoStore();
    const layout = photoStore.layout.name;
    const photos = photoStore.photos;
    const totalPhotos = ref(photoStore.layout.no)
    const selected = ref([])
    const error = ref('')
    const router = useRouter()

    console.log(selected.value)

    const remove = (photo)=>{
        if(totalPhotos.value!=0){
            error.value = ''
        }
        console.log(photo)
        const newSelected = selected.value.filter(s=>s!=photo)
        totalPhotos.value++
        selected.value = newSelected
    }

    const add = (photo)=>{
        if(totalPhotos.value<=0){
            error.value = 'Select the required number of photos only'
            return
        }

        if(selected.value.includes(photo)){
            error.value = 'You selected that already'
            return
        }else{
            error.value = ''
            selected.value.push(photo)
            console.log(selected)
            console.log(totalPhotos.value)
            totalPhotos.value--
        }
    }

    const proceed = ()=>{
        photosStore.layout = selectedLayout.value
        router.push('/design')
    }
</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative flex flex-col gap-3">
        <div class="w-[60%] h-[70%] bg-white border grid grid-cols-[1fr_60%] overflow-hidden">
            <!-- 1st col -->
            <div class="flex items-center justify-center bg-red-200 border-r p-5">
                <LayoutA :selected="selected" v-if="layout=='Layout A'"/>
                <LayoutB :selected="selected" v-if="layout=='Layout B'"/>
                <LayoutC :selected="selected" v-if="layout=='Layout C'"/>
                <LayoutD :selected="selected" v-if="layout=='Layout D'"/>
            </div>
            <!-- images -->
            <div class="p-8 relative">
                <p class="text-2xl">You chose <span class="font-semibold">{{ layout }}</span>, please select <span class="font-semibold">{{ totalPhotos }}</span> photo/s:</p>
                <p class="text-red-300 font-semibold">{{ error }}</p>
                <div class="grid grid-cols-3 gap-3 mt-5">
                    <!-- picture -->
                    <div v-for="(photo,index) in photos" :key="index" class="relative">
                        <img :src="photo" alt="photo" @click="add(photo)" class="relative border"/> 
                        <!-- remove button -->
                         <button v-if="selected.includes(photo)" @click="remove(photo)"  class="absolute bg-red-200 p-2 -top-2 -right-2 rounded-3xl shadow">
                           <img :src="x" alt="" class="w-3"> 
                         </button>
                    </div>
                </div>

                <!-- next -->
                <button @click="proceed" class="hover:translate-y-1 absolute right-10 bottom-10" :disabled="!selectedLayout">
                    <img :src="next" alt="">
                </button>
               
            </div>
        </div>
    </main>
</template>
