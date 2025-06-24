import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePhotoStore = defineStore('photos', ()=>{
    const photos = ref([])
    const layout = ref('') 
    const selectedPhotos = ref([])

    return {
        photos,
        layout
    }
})