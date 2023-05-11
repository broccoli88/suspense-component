<script setup>
import useFetch from '@/modules/useFetch'
import { ref } from 'vue'

const joke = ref(null)
const url = 'https://v2.jokeapi.dev/joke/an'
const { response, fetchData } = useFetch(url, {})

await fetchData()
joke.value = await response.value
</script>

<template>
  <div>
    <h2>Let's hear another Joke...</h2>
    <p>{{ joke.setup }}</p>
    <p>{{ joke.delivery }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
