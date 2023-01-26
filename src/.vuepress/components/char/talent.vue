<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane v-for="(item, key) in data.data" :label="item.title" :key="'char-talent-' + key"
      :name="'char-talent-' + key">
      <div class="char-element-image">
        <div :class="'background ' + data.element">
          <img class="image" :src="dataRoot + item.image" />
        </div>
      </div>
      <div class="char-element-desc" v-for="(desc, descKey) in item.desc" :key="'char-talent-desc-' + descKey"
        v-html="getDesc(desc)"></div>
      <char-talent-table v-if="item.data != null" :data="item.data" />
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
const activeName = ref('char-talent-0')

onMounted(() => {
  fetch(`${dataRoot}/data/char/${props.name}/talent.json`)
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
