<template>
  <template v-if="!searchedData.length">{{string}}</template>
  <template v-else>
    <template v-for="({start, end, searched}, index) in dataForRender" :key="index">
      <span v-if="searched" class="strong">{{ string.substring(start, end + 1) }}</span>
      <template v-else>{{ string.substring(start, end + 1) }}</template>
    </template>
  </template>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { computeDataForStringWithSearch } from '@/utils'

const props = defineProps({
  string: String,
  searchString: String,
  searchedData: Array
})

const dataForRender = computed(() => computeDataForStringWithSearch(props.string, props.searchString, props.searchedData))
</script>

<style scoped>
.strong{
  font-weight: bold;
  color: orangered;
}
</style>
