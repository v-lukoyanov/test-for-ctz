<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="home">
    <Form />
    <List class="ml-3" />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import List from '@/components/ListBlock.vue'
import Form from '@/components/FormBlock.vue'

const store = useStore()

onBeforeMount(() => {
  store.dispatch('fetchData')
  store.dispatch('fetchLists')
})

</script>

<style lang="scss" scoped>
.home{
  display: flex;
}

.ml-3 {
  margin-left: 24px;
}
</style>
