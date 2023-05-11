import { reactive, toRefs } from 'vue'

export default function (url, options) {
  const state = reactive({
    response: {},
    error: '',
    isFetching: false
  })

  const fetchData = async () => {
    try {
      state.isFetching = true
      const res = await fetch(url, options)
      const json = await res.json()
      state.response = json
    } catch (err) {
      state.error = err
    } finally {
      state.isFetching = false
    }
  }
  return { ...toRefs(state), fetchData }
}
