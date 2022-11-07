<template>
  <div class="item">
    <div class="header">
      <span class="title">{{ item.queue.title }}</span>
      <span class="time">1ч 13мин</span>
    </div>
    <div class="content">
      <div class="fio">
        <StringWithSearchData :string="item.client.lastName" :search-string="searchString" :searched-data="item.searchData.lastName" />&nbsp;
        <StringWithSearchData :string="item.client.firstName" :search-string="searchString" :searched-data="item.searchData.firstName" />&nbsp;
        <StringWithSearchData :string="item.client.middleName" :search-string="searchString" :searched-data="item.searchData.middleName" />
      </div>
      <div class="status">{{ statuses[item.status].label }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

import StringWithSearchData from './StringWithSearchData'

const store = useStore()

const statuses = computed(() => {
  return store.state.statuses ?? []
})

const searchString = computed(() => store.state.searchText)

defineProps({
  item: Object
})
</script>

<style scoped lang="scss">
.item{
  padding: 20px;
  background: antiquewhite;
  width: 500px;
  margin-bottom: 20px;
  display: block;

  .header {
    margin-bottom: 10px;
    display: flex;
    font-size: 11px;
    justify-content: space-between;
    align-items: center;
    .title{
      color: black;
    }
    .time{
      color: gray;
    }
  }
  .content {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .fio{
      font-weight: bold;
    }
    .status{
      font-size: 11px;
      color: white;
      background: coral;
      border-radius: 12px;
      padding: 5px;
    }
  }
}

</style>
