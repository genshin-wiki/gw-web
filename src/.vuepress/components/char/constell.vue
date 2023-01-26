<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-constell-' + key"
      :name="'char-constell-' + key">
      <div class="char-element-image">
        <div :class="'background ' + data.element">
          <img class="image" :src="dataRoot + item.image" />
        </div>
      </div>
      <div class="char-element-desc" v-for="(desc, descKey) in item.desc" :key="'char-constell-desc-' + descKey"
        v-html="getDesc(desc)"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import { onMounted, ref } from 'vue';
import { getDesc } from '../../common/utils';
import { dataRoot } from '../../common/consts';

const props = defineProps(['name'])

const loaded = ref(false)
const data = ref()

const activeName = ref('char-constell-0')

onMounted(() => {
  fetch(`${dataRoot}/data/char/${props.name}/constell.json`)
    .then((res) => {
      res.json().then((result) => {
        data.value = result
        loaded.value = true
      })
    })
})
</script>

<style lang="scss" scoped>
@import '../../styles/element-desc.scss';
</style>
