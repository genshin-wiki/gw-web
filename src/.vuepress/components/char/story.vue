<template>
  <el-tabs v-model="activeName" v-if="loaded">
    <el-tab-pane label="角色详细" name="desc">
      <p class="char-story-text" v-for="(item, key) in data.desc" :key="`desc-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="角色故事1" name="story1">
      <p class="char-story-text" v-for="(item, key) in data.story1" :key="`story1-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="角色故事2" name="story2">
      <p class="char-story-text" v-for="(item, key) in data.story2" :key="`story2-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="角色故事3" name="story3">
      <p class="char-story-text" v-for="(item, key) in data.story3" :key="`story3-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="角色故事4" name="story4">
      <p class="char-story-text" v-for="(item, key) in data.story4" :key="`story4-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="角色故事5" name="story5">
      <p class="char-story-text" v-for="(item, key) in data.story5" :key="`story5-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane :label="data.special.title" name="special">
      <p class="char-story-text" v-for="(item, key) in data.special.data" :key="`special-${key}`">
        {{ item }}
      </p>
    </el-tab-pane>
    <el-tab-pane label="神之眼" name="vision">
      <p class="char-story-text" v-for="(item, key) in data.vision" :key="`vision-${key}`">
        {{ item }}
      </p>
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
const activeName = ref('desc')

onMounted(() => {
  fetch(`${dataRoot}/data/char/${props.name}/story.json`)
    .then((res) => {
      res.json().then((result) => {
        data.value = result
        loaded.value = true
      })
    })
})
</script>

<style lang="scss" scoped>
.char-story-text {
  line-height: 20px;
}
</style>
