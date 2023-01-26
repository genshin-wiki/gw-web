<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-voice-' + key" :name="'char-voice-' + key">
      <div v-for="(content, k) in item.content" :key="'char-voice-' + key + '-content' + k">
        <span>{{ content }}</span>
      </div>
      <char-voice-player @play="play" @pause="pause" :voice="item.voice" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane, ElMessage } from 'element-plus'
import { onMounted, onUnmounted, ref } from 'vue';
import { dataRoot } from '../../common/consts';

const props = defineProps(['name'])

const loaded = ref(false)
const data = ref()
const activeName = ref('char-voice-0')
let audio: HTMLAudioElement

function play(url) {
  if (audio != undefined) {
    audio.src = url
    audio.play()
  } else {
    ElMessage.error('当前浏览器不支持音频播放')
  }
}

function pause() {
  if (audio != undefined) {
    audio.pause()
  } else {
    ElMessage.error('当前浏览器不支持音频播放')
  }
}

onMounted(() => {
  if (typeof Audio != 'undefined') {
    audio = new Audio()
  }

  fetch(`${dataRoot}/data/char/${props.name}/voice.json`)
    .then((res) => {
      res.json().then((result) => {
        data.value = result
        loaded.value = true
      })
    })
})

onUnmounted(() => {
  audio.pause()
  audio.remove()
})
</script>

<style lang="scss" scoped>

</style>
