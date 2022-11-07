<template>
  <div class="form">
    <div class="form__item">
      <input type="text" v-model="searchText" placeholder="строка поиска">
    </div>

    <div class="form__item">
      <select name="status" id="status" v-model="status">
        <option value="">Выберите статус</option>
        <option v-for="status in Object.values(statuses)" :key="status.code" :value="status.code">{{status.label}}</option>
      </select>
    </div>

    <div class="form__item">
      <select name="queue" id="queue" v-model="queue">
        <option value="">Выберите очередь</option>
        <option v-for="queue in Object.values(queues)" :key="queue.code" :value="queue.code">{{queue.label}}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { debounce } from '@/utils'

const store = useStore()

const statuses = computed(() => {
  return store.state.statuses ?? []
})

const queues = computed(() => {
  return store.state.queues ?? []
})

const setSearchTextDebounced = debounce((searchText) => {
  store.commit('setSearchText', searchText)
}, 200)

const searchText = computed({
  get () {
    return store.state.searchText
  },
  set (newValue) {
    setSearchTextDebounced(newValue)
  }
})

const queue = computed({
  get () {
    return store.state.queue
  },
  set (newValue) {
    store.commit('setQueue', newValue)
  }
})

const status = computed({
  get () {
    return store.state.status
  },
  set (newValue) {
    store.commit('setStatus', newValue)
  }
})
</script>

<style scoped>
.form__item:not(:last-child) {
  margin-bottom: 20px;
  text-align: left;
}
</style>
