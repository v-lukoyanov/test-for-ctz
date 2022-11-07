import { createStore } from 'vuex'
import { getData, getLists } from '@/services'
import { searchSubstrings } from '@/utils'

export default createStore({
  state: {
    data: [],
    queues: {},
    statuses: {},

    searchText: '',
    queue: '',
    status: ''
  },
  getters: {
    filteredItems (state) {
      const filteredItems = []

      for (const item of state.data) {
        const { client, queue, status } = item

        /**
         * Сначала реализуем первичный фильтр по селектам
         */
        if (state.status && status !== state.status) continue
        if (state.queue && queue.code !== state.queue) continue

        /**
         * Формируем объект с данными о вхождениях поисковой строки
         */
        const searchData = {
          firstName: searchSubstrings(client.firstName, state.searchText),
          lastName: searchSubstrings(client.lastName, state.searchText),
          middleName: searchSubstrings(client.middleName, state.searchText)
        }
        if (state.searchText && !searchData.firstName.length && !searchData.middleName.length && !searchData.lastName.length) continue

        filteredItems.push({ ...item, searchData })
      }

      return filteredItems
    }
  },
  mutations: {
    setData (state, data) {
      state.data = data
    },
    setSearchText (state, str) {
      state.searchText = str
    },
    setQueues (state, data) {
      state.queues = data
    },
    setStatuses (state, data) {
      state.statuses = data
    },
    setQueue (state, data) {
      state.queue = data
    },
    setStatus (state, data) {
      state.status = data
    }
  },
  actions: {
    async fetchData (context) {
      const data = await getData()
      context.commit('setData', data)
    },

    async fetchLists (context) {
      const { statuses, queues } = await getLists()

      context.commit('setStatuses', statuses)
      context.commit('setQueues', queues)
    }
  },
  modules: {
  }
})
