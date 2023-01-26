<template>
  <table class="char-card-table">
    <tbody>
      <tr v-if="data.item != null">
        <th>突破材料</th>
        <td>
          <div class="char-level-item" v-for="(item, key) in data.item" :key="key">
            <img :class="`rank-image-${item.rank}`" :style="getStyle(item.rank)" :src="dataRoot + item.image" />
            <span>{{ item.name }} * {{ item.count }}</span>
          </div>
        </td>
      </tr>
      <tr v-if="data.unlock != null">
        <th>解锁天赋</th>
        <td>
          <div v-for="(unlock, key) in data.unlock" :key="`char-level-unlock-${key}`">
            {{ unlock }}
          </div>
        </td>
      </tr>
      <tr v-for="(attr, key) in data.attributes" :key="`char-level-attr-${key}`">
        <th>{{ attr.name }}</th>
        <td>{{ attr.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { dataRoot } from '../../../common/consts';


const props = defineProps(['data'])
const data = props.data

const getStyle = (rank: number) => {
  return `background-image: url('${dataRoot}/image/item/bg/UI_QualityBg_${rank}s.png')`
}

</script>

<style lang="scss" scoped>
.char-card-table {
  text-align: unset;
}

.char-level-item {
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  .rank-image-base {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 6px;
  }

  .rank-image-1 {
    @extend .rank-image-base;
    background-color: rgb(88, 135, 117);
  }

  .rank-image-2 {
    @extend .rank-image-base;
    background-color: rgb(114, 116, 120);
  }

  .rank-image-3 {
    @extend .rank-image-base;
    background-color: rgb(78, 157, 204);
  }

  .rank-image-4 {
    @extend .rank-image-base;
    background-color: rgb(176, 126, 208);
  }

  .rank-image-5 {
    @extend .rank-image-base;
    background-color: rgb(221, 131, 35);
  }
}
</style>
