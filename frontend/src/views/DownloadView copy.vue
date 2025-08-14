<script setup>
    import LayoutA from '@/components/LayoutA.vue'
    import LayoutB from '@/components/LayoutB.vue'
    import LayoutC from '@/components/LayoutC.vue'
    import LayoutD from '@/components/LayoutD.vue'
    import { usePhotoStore } from '@/stores/photos'
    import domtoimage from 'dom-to-image-more'
    import { useRouter } from 'vue-router'

    const photoStore = usePhotoStore()
    const layout = photoStore.layout.name
    const selectedColor = photoStore.selectedColor
    const selectedBg = photoStore.selectedBg
    const router = useRouter()

    const downloadImage = () => {
    const node = document.getElementById('capture')
    if (!node) return

    domtoimage.toPng(node)
        .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'pautobooth.png'
        link.href = dataUrl
        link.click()
        })
        .catch((error) => {
        console.error('Oops, something went wrong!', error)
        })
    }

    const home = ()=>{
        window.location.reload()
        router.push('/')
    }
</script>

<template>
  <main
    class="w-screen h-screen overflow-hidden bg-[#FFF2EB] flex items-center justify-center relative flex flex-col gap-3"
  >
    <div
      class="w-[60%] h-[70%] bg-white border overflow-hidden grid grid-cols-[1fr_60%]"
    >
      <div  class="flex items-center justify-center">
        <LayoutA id="capture"
          v-if="layout === 'Layout A'"
          :selected="photoStore.selectedPhotos"
          :color="selectedColor"
          :bg="selectedBg"
        />
        <LayoutB id="capture"
          v-if="layout === 'Layout B'"
          :selected="photoStore.selectedPhotos"
          :color="selectedColor"
          :bg="selectedBg"
        />
        <LayoutC id="capture"
          v-if="layout === 'Layout C'"
          :selected="photoStore.selectedPhotos"
          :color="selectedColor"
          :bg="selectedBg"
        />
        <LayoutD id="capture"
          v-if="layout === 'Layout D'"
          :selected="photoStore.selectedPhotos"
          :color="selectedColor"
          :bg="selectedBg"
        />
      </div>

      <div class="p-5 flex flex-col items-center justify-center">
        <p class="text-3xl">Thank you for using PAUTOBOOTH!</p>
        <p class="text-xl text-gray-500">
          We hope you had fun capturing your moments 📸
        </p>
        <button
        @click="downloadImage"
        class="mt-4 px-4 py-2 bg-red-300 border text-white w-50 rounded"
        >
            Download Layout
        </button>
        <button 
            @click="home"
            class="mt-4 px-4 py-2 border border-red-300 text-red-300 w-50 text-center rounded"
        >
            Back to Home
        </button>
      </div>
    </div>
  </main>
</template>
