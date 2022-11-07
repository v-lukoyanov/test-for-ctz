<template>
  <div class="list" v-if="filteredItems?.length">
    <ListItem v-for="item in filteredItems" :key="item.consultationId" :item="item" />
  </div>
  <div v-else>Не найдены элементы</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ListItem from './ListItem'

const store = useStore()

const filteredItems = computed(() => store.getters.filteredItems)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
