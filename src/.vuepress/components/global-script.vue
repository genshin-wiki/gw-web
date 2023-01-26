<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const autoGray = document.createElement("script");
  autoGray.setAttribute("src", "https://cdn.armoe.cn/static/js/autoGray.js")
  const player = document.createElement("script");
  player.setAttribute("id", "myhk");
  player.setAttribute("src", "https://myhkw.cn/api/player/167470446269");
  player.setAttribute("key", "167470446269");
  player.setAttribute("m", "1");
  document.body.appendChild(autoGray);
  document.body.appendChild(player);
})
</script>

<template></template>
