<script setup>
import { usePhotoStore } from '@/stores/photos'
import heart from '../assets/images/heart.png'
import logo from '../assets/images/logo.png'

const props = defineProps({
  selected: Array
})
</script>

<template>
  <div class="w-80 h-125 bg-[#F5F8FF] border px-3 pt-5 flex flex-col gap-2 shadow">
    <div class="grid grid-cols-2 gap-x-1">
      <div
        v-for="index in 2"
        :key="'row1-' + index"
        class="w-full h-50 bg-[#FEC5BB] border"
      >
        <img
          v-if="selected[index - 1]"
          :src="selected[index - 1]"
          alt="Selected"
          class="object-cover w-full h-full"
        />
        <div
          v-else
          class="w-full h-full bg-[#DFE7FD]"
        >
          
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-x-1">
      <div
        v-for="index in 2"
        :key="'row2-' + index"
        class="w-full h-50 bg-[#FEC5BB] border"
      >
        <img
          v-if="selected[index + 1]"
          :src="selected[index + 1]"
          alt="Selected"
          class="object-cover w-full h-full"
        />
        <div
          v-else
          class="w-full h-full bg-[#DFE7FD]"
        >
        </div>
      </div>
    </div>
  </div>
</template>
