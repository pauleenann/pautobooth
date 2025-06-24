<script setup>
import { usePhotoStore } from '@/stores/photos'
import heart from '../assets/images/heart.png'
import logo from '../assets/images/logo.png'

const props = defineProps({
  selected: Array
})
</script>

<template>
  <div class="w-60 h-125 bg-[#FBC4AB] border px-3 pt-5 flex flex-col gap-2 shadow">
    <div
      v-for="index in 2"
      :key="index"
      class="w-full h-50 bg-[#FEC5BB] border flex items-center justify-center"
    >
      <img
        v-if="selected[index - 1]"
        :src="selected[index - 1]"
        alt="Selected"
        class="object-cover w-full h-full"
      />
      <div
        v-else
        class="w-full h-full bg-white"
      >
      </div>
    </div>
  </div>
</template>
