<script setup>
  import { usePhotoStore } from '@/stores/photos'
  import heart from '../assets/images/heart.png'
  import logo from '../assets/images/logo.png'

  const props = defineProps({
    selected: Array,
    color: String,
    bg: String
  })
</script>

<template>
  <div 
    :style="{ backgroundImage: props.bg ? `url(${props.bg})` : '', backgroundSize: 'cover' }"
    :class="[props.color||'bg-[#F8EDEB]', 'border border-transparent', 'w-60', 'h-125', 'px-3', 'pt-5', 'flex', 'flex-col', 'gap-2', 'shadow-xl', 'relative']"
  >
    <div
      v-for="index in 2"
      :key="index"
      :class="['border border-transparent', 'w-full', 'h-50', 'flex', 'items-center', 'justify-center']"
    >
      <img
        v-if="selected[index - 1]"
        :src="selected[index - 1]"
        alt="Selected"
        class="object-cover w-full h-full"
      />
      <div
        v-else
        class="w-full h-full bg-gray-200 text-gray-600 flex items-center justify-center"
      >
        No image selected
      </div>
    </div>
  </div>
</template>
