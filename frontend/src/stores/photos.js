import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePhotoStore = defineStore('photos', ()=>{
    const photos = ref([])
    const layout = ref('') 
    const selectedPhotos = ref([])
    const selectedColor = ref('')
    const selectedBg = ref('')

    return {
        photos,
        layout,
        selectedPhotos,
        selectedBg,
        selectedColor
    }
})