<template>
  <table>
    <tbody>
      <tr>
        <th>汉语</th>
        <th>日语</th>
        <th>英语</th>
        <th>韩语</th>
      </tr>
      <tr>
        <td>
          <el-button type="primary" link @click="play('cn')">{{ status.cn }}</el-button>
        </td>
        <td>
          <el-button type="primary" link @click="play('jp')">{{ status.jp }}</el-button>
        </td>
        <td>
          <el-button type="primary" link @click="play('en')">{{ status.en }}</el-button>
        </td>
        <td>
          <el-button type="primary" link @click="play('kr')">{{ status.kr }}</el-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { dataRoot } from '../../../common/consts';

const props = defineProps(['voice'])
const emit = defineEmits(['play', 'pause'])

const voice = props.voice

const status = ref({
  cn: '播放',
  jp: '播放',
  en: '播放',
  kr: '播放'
})

const playing = {
  cn: false,
  jp: false,
  en: false,
  kr: false
}

const play = (region) => {
  if (!playing[region]) {
    reset()
    status.value[region] = '暂停'
    playing[region] = true
    emit('play', dataRoot + voice.replace(/\{lang\}/g, region))
  } else {
    status.value[region] = '播放'
    playing[region] = false
    pause()
  }
}

const pause = () => {
  emit('pause')
}

const reset = () => {
  for (const key in status.value) {
    status.value[key] = '播放' // 重置按钮图标
    playing[key] = false // 重置播放状态
  }
}
</script>

<style lang="scss" scoped>
.char-voice-play-button {
  cursor: pointer;
  font-size: 26px;
}
</style>
