<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane label="20级突破" name="char-level-20">
      <char-level-item :data="data.lv20" />
    </el-tab-pane>
    <el-tab-pane label="40级突破" name="char-level-40">
      <char-level-item :data="data.lv40" />
    </el-tab-pane>
    <el-tab-pane label="50级突破" name="char-level-50">
      <char-level-item :data="data.lv50" />
    </el-tab-pane>
    <el-tab-pane label="60级突破" name="char-level-60">
      <char-level-item :data="data.lv60" />
    </el-tab-pane>
    <el-tab-pane label="70级突破" name="char-level-70">
      <char-level-item :data="data.lv70" />
    </el-tab-pane>
    <el-tab-pane label="80级突破" name="char-level-80">
      <char-level-item :data="data.lv80" />
    </el-tab-pane>
    <el-tab-pane label="90级属性" name="char-level-90">
      <char-level-item :data="data.lv90" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import { onMounted, ref } from 'vue';
import { dataRoot } from '../../common/consts';

const props = defineProps(['name'])

const loaded = ref(false)
const data = ref()

const activeName = ref('char-level-20')

onMounted(() => {
  fetch(`${dataRoot}/data/char/${props.name}/level.json`)
    .then((res) => {
      res.json().then((result) => {
        data.value = result
        loaded.value = true
      })
    })
})
</script>

<style lang="scss" scoped>

</style>
