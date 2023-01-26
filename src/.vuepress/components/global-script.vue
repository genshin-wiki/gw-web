<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const autoGray = document.createElement("script");
  autoGray.setAttribute("src", "https://cdn.armoe.cn/static/js/autoGray.js")
  document.body.appendChild(autoGray);
})
</script>

<template></template>
