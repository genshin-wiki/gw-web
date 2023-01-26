<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane v-for="(item, key) in data" :label="item.title" :key="'char-iaage-' + key" :name="'char-image-' + key">
      <img :src="dataRoot + item.image" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import { onMounted, onUnmounted, ref } from 'vue';
import { dataRoot } from '../../common/consts';

const props = defineProps(['name'])

const loaded = ref(false)
const data = ref()

const activeName = ref('char-image-0')

const style = document.createElement('style')

onMounted(() => {
  fetch(`${dataRoot}/data/char/${props.name}/image.json`)
    .then((res) => {
      res.json().then((result) => {
        data.value = result
        const img = dataRoot + data.value[0].image
        style.innerText = `body:before { background: url('${img}') center/cover;}`
        document.head.appendChild(style)
        loaded.value = true
      })
    })
})

onUnmounted(() => {
  style.remove()
})

</script>

<style>
body:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: -1;
  content: '';
  position: fixed;
}
</style>
