<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const colorCode = {
  white: "White_Wool_JE2_BE2",
  orange: "Orange_Wool_JE3_BE3",
  magenta: "Magenta_Wool_JE3_BE3",
  "light-blue": "Light_Blue_Wool_JE3_BE3",
  yellow: "Yellow_Wool_JE3_BE3",
  lime: "Lime_Wool_JE3_BE3",
  pink: "Pink_Wool_JE3_BE3",
  gray: "Gray_Wool_JE3_BE3",
  "light-gray": "Light_Gray_Wool_JE3_BE3",
  cyan: "Cyan_Wool_JE3_BE3",
  purple: "Purple_Wool_JE3_BE3",
  blue: "Blue_Wool_JE3_BE3",
  brown: "Brown_Wool_JE3_BE3",
  green: "Green_Wool_JE3_BE3",
  red: "Red_Wool_JE3_BE3",
  black: "Black_Wool_JE3_BE3",
};

const imageSrc = computed(() => {
  return `https://zh.minecraft.wiki/images/${colorCode[props.color]}.png`;
});

const ImageAlt = computed(() => {
  return `${props.color} wool`;
});
</script>

<template>
  <img :src="imageSrc" :alt="ImageAlt" class="wool-icon" />
</template>

<style>
.wool-icon {
  width: 18px;
}
</style>
